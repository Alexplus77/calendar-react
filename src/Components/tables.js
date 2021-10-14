import React from "react";
import "../App.css";
import Columns from "./columns";
import TableWeek from "./tableWeek";
import TableDays from "./tableDays";
import { lastDayOfMonth } from "date-fns";

console.log(lastDayOfMonth(new Date(), "dd"));

const Tables = () => {
  const namesWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  return (
    <table className="ui-datepicker-calendar">
      <Columns namesWeek={namesWeek} />
      <TableWeek namesWeek={namesWeek} />
      <TableDays />
    </table>
  );
};

export default Tables;
