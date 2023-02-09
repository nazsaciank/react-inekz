import { BehaviorSubject, map, tap } from 'rxjs'
import { AsyncValidatorFn, ValidatorFn } from './validators'

export interface ControlOptions {
  emitEvent?: boolean
  onlySelf?: boolean
}

export type ControlStatus = 'valid' | 'invalid' | 'pending'

export class FormControl<T = any> {
  public name!: string

  private $value = new BehaviorSubject<T | null>(null)
  public get value() {
    return this.$value.getValue()
  }

  private $status = new BehaviorSubject<ControlStatus>('pending')
  public get status() {
    return this.$status.getValue()
  }

  private $errors = new BehaviorSubject<object | null>(null)
  get errors() {
    return this.$errors.getValue()
  }

  private $isDirty = new BehaviorSubject<boolean>(false)
  public get isDirty() {
    return this.$isDirty.getValue()
  }

  private $isTouched = new BehaviorSubject<boolean>(false)
  public get isTouched() {
    return this.$isTouched.getValue()
  }

  private $isIndeterminate = new BehaviorSubject<boolean>(false)
  public get isIndeterminate() {
    return this.$isIndeterminate.getValue()
  }

  private isEmitted = true

  private validators!: ValidatorFn[]

  private asyncValidators!: AsyncValidatorFn[]

  constructor(
    value: T,
    validators?: ValidatorFn | ValidatorFn[],
    asyncValidators?: AsyncValidatorFn | AsyncValidatorFn[],
  ) {
    if (validators) this.setValidators(validators, false)
    if (asyncValidators) this.setAsyncValidators(asyncValidators, false)
    this.setValue(value)
  }

  public setValue(value: T, opt: ControlOptions = { emitEvent: true, onlySelf: true }) {
    if (opt.emitEvent !== undefined) this.isEmitted = opt.emitEvent
    this.$value.next(value)
    if (opt.onlySelf) {
      this.applyValidators()
      this.applyAsyncValidators()
    }
  }

  public setValidators(validators: ValidatorFn | ValidatorFn[], emit = true) {
    if (typeof validators === 'function') validators = [validators]
    this.validators = validators
    if (emit) this.applyValidators()
  }

  public applyValidators() {
    let err: object | null = null

    if (this.validators) {
      const errOfValidators = this.validators.map((validator) => validator(this.value)).filter((v) => v !== null)
      if (errOfValidators.length > 0) {
        errOfValidators.forEach((error) => {
          err = { ...err, ...error }
        })
      }
      this.$errors.next(err)
      this.$status.next(err ? 'invalid' : 'valid')
    }
  }

  public setAsyncValidators(validators: AsyncValidatorFn | AsyncValidatorFn[], emit = true) {
    if (typeof validators === 'function') validators = [validators]
    this.asyncValidators = validators
    if (emit) this.applyAsyncValidators()
  }

  public async applyAsyncValidators() {
    let err: object | null = null

    if (this.errors && this.asyncValidators) {
      this.$status.next('pending')
      const validated = await Promise.all(this.asyncValidators.map((validator) => validator(this.value)))
      const errOfValidators = validated.filter((v) => v !== null)
      if (errOfValidators.length > 0) {
        err = {}
        errOfValidators.forEach((error) => {
          err = { ...err, ...error }
        })
      }
      this.$errors.next(err)
      this.$status.next(err ? 'invalid' : 'valid')
    }
  }

  public setErrors(errors: object | null) {
    this.$errors.next(errors)
    this.$status.next(errors ? 'invalid' : 'valid')
  }

  public setDirty = () => this.$isDirty.next(true)

  public setPristine = () => this.$isDirty.next(false)

  public setTouched = () => this.$isTouched.next(true)

  public setUntouched = () => this.$isTouched.next(false)

  public setIndeterminate = (isIndeterminate: boolean) => {
    this.$isIndeterminate.next(isIndeterminate)
  }

  public onChange() {
    return this.$value.asObservable().pipe(
      map((value) => ({ value, emitted: this.isEmitted })),
      tap(() => (this.isEmitted = true)),
    )
  }

  public onStatus() {
    return this.$status.asObservable()
  }

  public onErrors() {
    return this.$errors.asObservable()
  }

  public onDirty() {
    return this.$isDirty.asObservable()
  }

  public onTouched() {
    return this.$isTouched.asObservable()
  }

  public onIndeterminate() {
    return this.$isIndeterminate.asObservable()
  }
}
