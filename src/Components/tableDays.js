import React from "react";
import "../App.css";
import { format } from "date-fns";
import cn from "classnames";

const TableDays = ({ allDaysOfMonth }) => {
  const countWeek = [1, 2, 3, 4, 5];
  const arrDays = Array.from(allDaysOfMonth);
  return (
    <tbody>
      {countWeek.map((count) => (
        <tr key={count}>
          {arrDays.splice(0, 7).map((day) => (
            <td
              key={day}
              className={cn(
                {
                  "ui-datepicker-today":
                    format(day, "d") === format(new Date(), "d"),
                },
                {
                  "ui-datepicker-other-month":
                    format(day, "M") !== format(new Date(), "M"),
                }
              )}
            >
              {format(day, "d")}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableDays;
