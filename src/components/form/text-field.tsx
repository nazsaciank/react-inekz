import React from "react";
import { Subscription } from "rxjs";
import { FormControl } from "./common/formcontrol";
import { AsyncValidatorFn, ValidatorFn } from "./common/validators";

export interface TextFieldProps<T = any> extends Omit<React.HTMLProps<HTMLInputElement>, "onChange" | "label"> {
    control: FormControl<T>;

    name: string;

    label: React.ReactNode | any;

    validators?: ValidatorFn | ValidatorFn[];

    asyncValidators?: AsyncValidatorFn | AsyncValidatorFn[];

    before?: React.ReactNode | any;

    after?: React.ReactNode | any;

    hasFeedback?: boolean;

    successTemplate?: (value: any) => React.ReactNode;

    errorTemplate?: (errors: any) => React.ReactNode;

    onChange?: (value: any) => void;

    onStatus?: (status: "valid" | "invalid" | "pending") => void;

    onErrors?: (errors: any) => void;

    onControl?: (value: any, status: "valid" | "invalid" | "pending", errors: any) => void;
}

export interface TextFieldState {
    value: any;
    status: "valid" | "invalid" | "pending";
    errors: object | null;
    isDirty: boolean;
    isTouched: boolean;
}

class TextField extends React.Component<TextFieldProps, TextFieldState> {
    readonly state: TextFieldState = {
        value: null,
        status: "pending",
        errors: null,
        isDirty: false,
        isTouched: false,
    };

    private sOnField: Subscription[] = [];

    componentDidMount(): void {
        const { control, name, validators, asyncValidators, onChange, onStatus, onErrors } = this.props;

        if (control) {
            if (name) control.name = name;
            if (validators) control.setValidators(validators);
            if (asyncValidators) control.setAsyncValidators(asyncValidators);

            this.sOnField.push(
                control.onDirty().subscribe((isDirty) => this.setState({ isDirty })),
                control.onTouched().subscribe((isTouched) => this.setState({ isTouched })),
                control.onChange().subscribe(({ value, emitted }) => {
                    this.setState({ value });
                    if (onChange && emitted) onChange(value);
                }),
                control.onStatus().subscribe((status) => {
                    this.setState({ status });
                    if (onStatus) onStatus(status);
                }),
                control.onErrors().subscribe((errors) => {
                    this.setState({ errors });
                    if (onErrors) onErrors(errors);
                })
            );
        }
    }

    componentWillUnmount(): void {
        if (this.sOnField.length > 0) this.sOnField.forEach((s) => s.unsubscribe());
    }

    render() {
        const {
            name,
            label,
            validators,
            asyncValidators,
            before,
            after,
            hasFeedback = false,
            successTemplate,
            errorTemplate,
            onChange,
            onStatus,
            onErrors,
            onControl,
            ...inputProps
        } = this.props;
        const { value, status, errors, isDirty, isTouched } = this.state;

        return (
            <fieldset className='text-field'>
                <label htmlFor={name} className='label-field'>
                    {label}
                </label>
                <div className='input-field'>
                    {before && <div className='before'>{before}</div>}
                    <input
                        id={name}
                        name={name}
                        defaultValue={value}
                        onChange={this.handleOnChange.bind(this)}
                        onFocus={this.handleOnFocus.bind(this)}
                        {...inputProps}
                    />
                    {after && <div className='after'>{after}</div>}
                </div>
                {hasFeedback && isTouched && isDirty && errors && status === "invalid" && errorTemplate && (
                    <div className='text-sm text-red-600'>{errorTemplate(errors)}</div>
                )}
                {hasFeedback && isTouched && isDirty && !errors && status === "valid" && successTemplate && (
                    <div className='text-sm text-green-600'>{successTemplate(value)}</div>
                )}
            </fieldset>
        );
    }

    private handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { control } = this.props;
        const { isDirty } = this.state;

        const { value } = e.currentTarget;

        control.setValue(value);

        if (!isDirty) control.setDirty();
    };

    private handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        const { control, onFocus } = this.props;
        const { isTouched } = this.state;

        if (!isTouched) control.setTouched();

        if (onFocus) onFocus(e);
    };
}

export default TextField;
