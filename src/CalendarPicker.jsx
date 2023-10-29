import React from 'react';
import dayjs from 'dayjs';
import { Container } from '@mui/material';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const CalendarPicker = () => {
    const [selectedDate, setSelectedDate] = React.useState(dayjs())


    const returnDate = selectedDate.add(7, 'day').format('dddd, MMMM D, YYYY');

  return (
    <Container>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
            />
        </LocalizationProvider>
        <br />
        <p>Selected date: {selectedDate.format('dddd, MMMM D, YYYY')}</p>
        <p>Return by: <span style={{color: 'red'}}>{returnDate}</span></p>
    </Container>
    );
};

export default CalendarPicker;
