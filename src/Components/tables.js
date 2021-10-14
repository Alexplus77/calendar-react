import React from "react";
import "../App.css";
import Columns from "./columns";
import TableWeek from "./tableWeek";
import TableDays from "./tableDays";
import { lastDayOfMonth } from "date-fns";
import { startOfMonth } from "date-fns";
import { eachDayOfInterval } from "date-fns";
import { format } from "date-fns";
import { addDays } from "date-fns";

const Tables = () => {
  const lastDay = lastDayOfMonth(new Date());
  const firstDay = startOfMonth(new Date());
  const countDays = format(firstDay, "i") - 1;
  const prevMonth = addDays(firstDay, -countDays);
  const nextMonth = addDays(lastDay, countDays);

  const allDaysOfMonth = eachDayOfInterval({
    start: prevMonth,
    end: nextMonth,
  });
  console.log(prevMonth);
  const namesWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  return (
    <table className="ui-datepicker-calendar">
      <Columns namesWeek={namesWeek} />
      <TableWeek namesWeek={namesWeek} />
      <TableDays allDaysOfMonth={allDaysOfMonth} />
    </table>
  );
};

export default Tables;
