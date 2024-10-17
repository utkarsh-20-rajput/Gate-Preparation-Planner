// src/components/Calendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Calendar styles

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="calendar-container">
      <h3>Calendar</h3>
      <Calendar
        onChange={handleDateChange}
        value={date}
      />
      <p>Selected date: {date.toDateString()}</p>
    </div>
  );
};

export default CalendarComponent;
