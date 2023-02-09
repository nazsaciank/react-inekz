import React from 'react'

export interface SwitchProps {}

export interface SwitchState {}

class Switch extends React.Component<SwitchProps, SwitchState> {
  render() {
    return (
      <fieldset className='switch-field'>
        <label>
          <input type='checkbox' />
          <span className='switch'></span>
          <span className='label'>Switch</span>
        </label>
      </fieldset>
    )
  }
}

export default Switch
