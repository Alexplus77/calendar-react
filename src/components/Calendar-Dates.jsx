import React from "react";
import "../App.css";
import { format } from "date-fns";
import cn from "classnames";

const CalendarDates = ({ allDaysOfMonth, countWeek, date }) => {
  const arrDays = [...allDaysOfMonth];
  return (
    <tbody>
      {countWeek.map((count) => (
        <tr key={count}>
          {arrDays.splice(0, 7).map((day) => (
            <td
              key={day}
              className={cn({
                "ui-datepicker-today": format(day, "d") === format(date, "d"),
                "ui-datepicker-other-month":
                  format(day, "M") !== format(date, "M"),
              })}
            >
              {format(day, "d")}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default CalendarDates;
