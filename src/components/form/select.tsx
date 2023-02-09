import React from "react";
import Option from "./option";

export interface SelectProps {}

export interface SelectState {}

class Select extends React.Component<SelectProps, SelectState> {
    static Option = Option;

    render() {
        return (
            <fieldset className='select-field'>
                <label>Label</label>
                <select>
                    <option value='1'>Option 1</option>
                    <option value='2'>Option 2</option>
                    <option value='3'>Option 3</option>
                </select>
            </fieldset>
        );
    }
}

export default Select;
