import * as React from 'react';
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button, FormControl, TextField, Autocomplete } from '@mui/material';
import axios from 'axios';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  formControl: {
    position: 'absolute',
  },
  zipCodeField: {
    marginTop: '16px',
  },
  categoryField: {
    marginTop: '16px',
  },
}));


function InputForm() {
  const [eventDate, setEventDate] = useState(dayjs().add(0, 'day'));
  const [Zipcode, setZipcode] = useState('');
  const [Category, setCategory] = useState([]);
  const [eventDateError, setEventDateError] = useState(false);
  const [ZipcodeError, setZipcodeError] = useState(false);
  const [options, setOptions] = useState([]);

  const handleInputChange = (event) => {
    const keyword = event.target.value;
    axios
      .get(`https://carentingsbackend.onrender.com/api/category/lookUp?keyword=${keyword}`)
      .then((response) => {
        setOptions(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEventDateChange = (date) => {
    setEventDateError(false);
    setEventDate(date);
  };

  const validateZipcode = () => {
    if (Zipcode.trim() === '') {
      setZipcodeError(true);
    } else if (!/^\d{5}(?:[-\s]\d{4})?$/.test(Zipcode)) {
      setZipcodeError(true);
    } else {
      setZipcodeError(false);
      return true;
    }
  };

  const handleZipcodeChange = (e) => {
    setZipcodeError(false);
    setZipcode(e.target.value);
    axios({
      url: `https://carentingsbackend.onrender.com/api/location/lookUp?keyword=${e.target.value}`,
      method: 'GET',
      headers: {
        authorization: 'your token comes here',
      },
    })
      .then((res) => {})
      .catch((err) => {});
  };

  const handleCategoryChange = (e, value) => {
    setCategory(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Zipcode) {
      setZipcodeError(true);
      return;
    } else if (validateZipcode()) {
      console.log('eventDate:', eventDate.$d);
      console.log('Zipcode:', Zipcode);
      console.log('Category:', Category);
    }
  };

  const navigate = useNavigate();
  const classes = useStyles();

  const handleButtonClick = () => {
    navigate('/shoppingPage');
  };

  return (
    <div>
      <FormControl component="form" onSubmit={handleSubmit} className={classes.formControl} >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Event Date"
          value={eventDate}
          defaultValue={dayjs().add(0, 'day')}
          onChange={handleEventDateChange}
          disablePast
          error={eventDateError}
          
        />
      </LocalizationProvider>

      <TextField
        label="Zipcode"
        value={Zipcode}
        onChange={handleZipcodeChange}
        id="filled-hidden-label-Normal"
        style={{marginTop:"1rem"}}
        variant="outlined"
        size="Normal"
        autoComplete="off"
        className={classes.zipCodeField}
        error={ZipcodeError}
      // InputProps={{
      // style: {
      //   color: 'white', // Set text color to white
      // },
      // }}
      />

      <Autocomplete
        options={options}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            style={{marginTop:"1rem"}}
            variant="outlined"
            onChange={handleInputChange}
            className={classes.categoryField}
          />
        )}
      />
      <Button
        variant="contained"
        // color="inherit"
        type="submit"
        onClick={handleButtonClick}
        style={{ marginTop: '16px', background: '#000000', color: 'white' }}
      >
        Submit
      </Button>

      
    </FormControl>
    </div>
    
    
  );
}

export default InputForm;

