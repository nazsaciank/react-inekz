import React from 'react'

export interface CheckboxProps {}

export interface CheckboxState {}

class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
  render() {
    return (
      <fieldset className='checkbox-field'>
        <label>
          <input type='checkbox' />
          <span className='checkbox'></span>
          <span className='label'>Checkbox</span>
        </label>
      </fieldset>
    )
  }
}

export default Checkbox
