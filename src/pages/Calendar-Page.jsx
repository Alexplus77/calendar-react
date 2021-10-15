import React from "react";
import "../App.css";
import CalendarWeek from "../components/Calendar-Week";
import CalendarDates from "../components/Calendar-Dates";
import CalendarHeader from "../components/Calendar-Header";
import { lastDayOfMonth } from "date-fns";
import { startOfMonth } from "date-fns";
import { eachDayOfInterval } from "date-fns";
import { format } from "date-fns";
import { addDays } from "date-fns";
import { ru } from "date-fns/locale";
import cn from "classnames";
import { countWeek } from "../constants/constants";
import { namesWeek } from "../constants/constants";
import { weekends } from "../constants/constants";

const CalendarPage = () => {
  const date = new Date(2022, 11 - 1, 15);
  const lastDay = lastDayOfMonth(date);
  const firstDay = startOfMonth(date);

  const prevMonth = addDays(firstDay, 1 - format(firstDay, "i"));
  const nextMonth = addDays(lastDay, 7 - format(lastDay, "i"));

  const allDaysOfMonth = eachDayOfInterval({
    start: prevMonth,
    end: nextMonth,
  });
  const formatDate = (check) => format(date, check, { locale: ru });
  return (
    <div className="ui-datepicker">
      <CalendarHeader formatDate={formatDate} />
      <table className="ui-datepicker-calendar">
        <colgroup>
          {namesWeek.map((name) => (
            <col
              className={cn({
                "ui-datepicker-week-end": weekends.includes(name),
              })}
              key={name}
            />
          ))}
        </colgroup>
        <CalendarWeek namesWeek={namesWeek} />
        <CalendarDates
          allDaysOfMonth={allDaysOfMonth}
          countWeek={countWeek}
          date={date}
        />
      </table>
    </div>
  );
};

export default CalendarPage;
