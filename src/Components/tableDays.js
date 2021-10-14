import React from "react";
import "../App.css";
import { format } from "date-fns";
const TableDays = ({ allDaysOfMonth }) => {
  const arrDays = Array.from(allDaysOfMonth);
  const countWeek = [1, 2, 3, 4, 5];

  return (
    <tbody>
      {countWeek.map((count) => (
        <tr key={count}>
          {arrDays.splice(0, 7).map((elem) => (
            <td key={elem}>{format(elem, "d")}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableDays;
