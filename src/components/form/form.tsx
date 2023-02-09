import React from 'react'
import { Subscription } from 'rxjs'
import TextField from './text-field'
import Checkbox from './checkbox'
import Radio from './radio'
import Switch from './switch'
import Textarea from './textarea'
import { Key } from '../../interfaces'
import { classNames } from '../../common'
import { ControlStatus, FormControl } from './common/formcontrol'
import DatePicker from './date-picker'
import Select from './select'

export interface FormProps extends Omit<React.HTMLProps<HTMLFormElement>, 'onChange' | 'onSubmit'> {
    onChange?: (values: Key) => void

    onSubmit?: (values: Key, isValid: boolean, errors: Key<object | null>) => void

    onStatus?: (status: Key<ControlStatus>) => void

    onErrors?: (errors: Key<object | null>) => void
}

export interface FormState {
    values: Key

    status: Key<ControlStatus>

    errors: Key<object | null>
}

class Form extends React.Component<FormProps, FormState> {
    readonly state: FormState = {
        values: {},
        status: {},
        errors: {},
    }

    private FormatForms = [Checkbox, Switch, Radio, DatePicker, Select, TextField, Textarea]

    private sFormChanges: Subscription[] = []

    componentDidMount(): void {
        const { children } = this.props
        const ch = children as JSX.Element[]

        const controls = this.getControls(ch)
        controls.forEach((control) => {
            const { values, status, errors } = this.state

            if (
                values[control.name] === undefined &&
                status[control.name] == undefined &&
                errors[control.name] == undefined
            ) {
                values[control.name] = control.value
                status[control.name] = control.status
                errors[control.name] = control.errors
                this.setState({ values, status, errors })
            }

            this.sFormChanges.push(
                control.onChange().subscribe(this.handleOnChange.bind(this, control)),
                control.onStatus().subscribe(this.handleOnStatus.bind(this, control)),
                control.onErrors().subscribe(this.handleOnErrors.bind(this, control)),
            )
        })
    }

    componentWillUnmount(): void {
        if (this.sFormChanges.length > 0) this.sFormChanges.forEach((s) => s.unsubscribe())
    }

    render() {
        const { children, className, onChange, onSubmit, onStatus, onErrors, ...rest } = this.props

        const { status } = this.state

        return (
            <form
                className={classNames('form', `form-${status}`, className)}
                onSubmit={this.handleSubmit.bind(this)}
                {...rest}
            >
                {children}
            </form>
        )
    }

    private getControls(children: JSX.Element[]): FormControl[] {
        const ch = children as JSX.Element[]

        const controllers: FormControl[] = []

        ch.forEach((child) => {
            if (this.FormatForms.includes(child.type)) {
                const { control } = child.props
                controllers.push(control)
                return
            }
            if (child.props.children && Array.isArray(child.props.children)) {
                const controls = this.getControls(child.props.children)
                controllers.push(...controls)
                return
            }
        })

        return controllers
    }

    private handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const { onSubmit } = this.props
        const { values, status, errors } = this.state

        const isValid = Object.values(status).every((v) => v === 'valid')

        onSubmit && onSubmit(values, isValid, errors)
    }

    private handleOnChange(control: FormControl, opt: any) {
        const { onChange } = this.props
        const { values } = this.state

        values[control.name] = opt.value
        this.setState({ values })
        onChange && onChange(values)
    }

    private handleOnStatus(control: FormControl, s: ControlStatus) {
        const { onStatus } = this.props
        const { status } = this.state

        status[control.name] = s
        this.setState({ status }, () => {
            /* const valid = Object.values(status).every(v => v === 'valid'); */
            onStatus && onStatus(status)
        })
    }

    private handleOnErrors(control: FormControl, e: object | null) {
        const { onErrors } = this.props
        const { errors } = this.state

        errors[control.name] = e
        this.setState({ errors }, () => {
            /* const errors = Object.values(this.state.errors).filter(v => v !== null); */
            onErrors && onErrors(errors)
        })
    }
}

export default Form
