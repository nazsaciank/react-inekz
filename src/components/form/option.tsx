import React from "react";

export interface OptionProps extends React.HTMLProps<HTMLOptionElement> {
    value: string | number;
}

export interface OptionState {}

class Option extends React.Component<OptionProps, OptionState> {
    render() {
        return <option value={this.props.value}>{this.props.children}</option>;
    }
}

export default Option;
