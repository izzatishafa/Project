import React, { useState } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, addMonths} from "date-fns";
import cx from "classnames";

const Calendar = () => {

    const [currentDate, setCurrentDate] = useState(new Date());

    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";
    const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        days.push(day);
        day = addDays(day, 1);
      }
      rows.push(days);
      days = [];
    }

    return (

      <div className="flex flex-col lg:px-28 sm:px-5 pt-4 pb-32 mb-5 h-screen">
        <h1 className={`lg:text-4xl sm:text-3xl pb-11 font-roboto-mono font-extrabold flex justify-center`}>
          {format(currentDate, "MMMM yyyy")}
        </h1>
        <div className="shadow-2xl rounded-md">
        <div className="grid grid-cols-7">
          {weekdays.map((weekday) => (
            <div key={weekday} className={`bg-dark-blue text-white flex items-center text-sm justify-center h-11 mb-5 font-black font-roboto-mono`}>
              {weekday}
            </div>
          ))}
          {rows.map((week, rowIndex) =>
            week.map((day, dayIndex) => (
              <div
                key={`${rowIndex}-${dayIndex}`}
                className={cx(`flex justify-center h-20 pt-5 cursor-pointer font-xs font-semibold font-roboto-mono`, {
                  "text-slate-300 text-shadow-lg": !isSameMonth(day, monthStart),
                  "text-md text-blue-600": isSameDay(day, currentDate),
                })}
                onClick={() => setCurrentDate(day)}
              >
                {format(day, dateFormat)}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Calendar









