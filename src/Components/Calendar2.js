import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import moment from "moment";
import '../index.css';

const localizer = momentLocalizer(moment);

const Calendar2 = (props) => {
  const [events, setEvents] = useState([
    {
      start: moment().toDate(),
      end: moment().add(3, "hour").toDate(),
      title: "Presentasi Izzati",
    },
  ]);
  
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{
          height: 550,
          fontFamily: 'Roboto Mono, monospace',
          fontWeight: 'bold',
          fontSize: "15px",
          textAlign: "left",
          paddingLeft: "30px",
          paddingRight: "16px",
        }}
        className="custom-calendar"
      />
    </div>
  );
};

export default Calendar2;




