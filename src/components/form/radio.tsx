import React from 'react';

export interface RadioProps {}

export interface RadioState {}

class Radio extends React.Component<RadioProps, RadioState> {
    render() {
        return (
            <fieldset className='radio-field'>
                <label>
                    <input type='radio' />
                    <span className='radio'></span>
                    <span className='label'>Radio</span>
                </label>
            </fieldset>
        );
    }
}

export default Radio;
