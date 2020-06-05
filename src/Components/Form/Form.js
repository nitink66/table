import React from 'react';
// text field
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
//select
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
//radio
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
//date
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

//button
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));




 function Form() {
  
  const classes = useStyles();
  
  const [name, setName ] = React.useState('')
  const [country, setCountry] = React.useState(''); // select
  const [value, setValue] = React.useState('male');  //gender
  const [selectedDate, setSelectedDate] = React.useState(new Date('1996-10-10')); //date

  const handleChangeName = (event) => {
    setName(event.taget.value)
  }


  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleChangeGender = (event) => {
    setValue(event.target.value);
  };

  const handleDateChangeDate = (date) => {
    setSelectedDate(date);
  };

 


  return (
    <form className={ classes.root } noValidate autoComplete="off">
      
      <TextField id="outlined-basic" onChange={handleChangeName} label="Name" variant="outlined" />
     
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          onChange={handleChangeCountry}
        >
          <MenuItem >India</MenuItem>
          <MenuItem >USA</MenuItem>
          <MenuItem >FRANCE</MenuItem>
        </Select>
      </FormControl>

      <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChangeGender}>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        
      </RadioGroup>
    </FormControl>

    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChangeDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
       </Grid>
    </MuiPickersUtilsProvider>

    <div className={classes.root}>
      <Button variant="outlined" color="primary" onClick={()=>{
        return this.props.dispatch('SUBMIT'(this.state.name))
      }} >Submit</Button>
      <Button variant="outlined" color="primary">Clear</Button>
      
      </div>

    </form>
  );
}

export default Form;