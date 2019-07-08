import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function DatePickerComponent(props) {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const defaultProps = {
      margin: "normal",
      label: "Date picker",
      name: "date-picker",
      id: "date-picker",
      onChange: handleDateChange,
      selectedDate: selectedDate
  } 

  // Apply defaults to props
  props = {...defaultProps , ...props};

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around" className="date-picker--component--container">
        <KeyboardDatePicker
          margin={props.margin}
          id={props.id}
          label={props.label}
          value={props.selectedDate}
          name={props.name}
          onChange={props.onChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>

      <style jsx>
            {`
              .date-picker--component--container .MuiTextField-root {
                width: 80%
              }
            `}
          </style>
    </MuiPickersUtilsProvider>
  );
}