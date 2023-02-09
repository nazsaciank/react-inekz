export type ValidatorError = {
    [key: string]: any;
};

export type ValidatorFn = (value: any) => null | ValidatorError;

export type AsyncValidatorFn = (value: any) => Promise<ValidatorError | null>;

export class Validator {
    public static required(value: any): null | ValidatorError {
        if (value === null || value === undefined || value === '') {
            return { required: true };
        }
        return null;
    }

    public static requiredTrue(value: any): null | ValidatorError {
        if (value !== true) {
            return { requiredTrue: true };
        }
        return null;
    }

    public static minLength(minLength: number): ValidatorFn {
        return (value: any) => {
            if (value && value.length < minLength) {
                return { minLength: { minLength, actualLength: value.length } };
            }
            return null;
        };
    }

    public static maxLength(maxLength: number): ValidatorFn {
        return (value: any) => {
            if (value && value.length > maxLength) {
                return { maxLength: { maxLength, actualLength: value.length } };
            }
            return null;
        };
    }

    public static pattern(pattern: string | RegExp): ValidatorFn {
        return (value: any) => {
            if (typeof pattern === 'string') pattern = new RegExp(pattern);
            if (value && !pattern.test(value)) {
                return { pattern: { requiredPattern: pattern, actualValue: value } };
            }
            return null;
        };
    }

    public static email(value: any): null | ValidatorError {
        if (value && !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,5}$/.test(value)) {
            return { email: true };
        }
        return null;
    }

    public static min(min: number): ValidatorFn {
        return (value: any) => {
            if (value && value < min) {
                return { min: { min, actual: value } };
            }
            return null;
        };
    }

    public static max(max: number): ValidatorFn {
        return (value: any) => {
            if (value && value > max) {
                return { max: { max, actual: value } };
            }
            return null;
        };
    }

    public static range(range: { min: number; max: number }): ValidatorFn {
        return (value: any) => {
            if (value && (value < range.min || value > range.max)) {
                return { range: { range, actual: value } };
            }
            return null;
        };
    }
}
