import React from 'react'

export interface DatePickerProps {}

export interface DatePickerState {}

class DatePicker extends React.Component<DatePickerProps, DatePickerState> {
  render() {
    return (
      <div>
        <label>Label</label>
        <input type='date' />
      </div>
    )
  }
}

export default DatePicker
