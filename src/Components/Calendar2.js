import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import moment from "moment";

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
        style={{ height: 500 }}
      />
    </div>
  );
};

export default Calendar2;
