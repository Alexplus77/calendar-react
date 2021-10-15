import React from "react";
import "../App.css";
import CalendarWeek from "../Components/Calendar-Week";
import CalendarDates from "../Components/Calendar-Dates";
import CalendarHeader from "../Components/Calendar-Header";
import { lastDayOfMonth } from "date-fns";
import { startOfMonth } from "date-fns";
import { eachDayOfInterval } from "date-fns";
import { format } from "date-fns";
import { addDays } from "date-fns";
import { ru } from "date-fns/locale";
import cn from "classnames";
import { countWeek } from "../Contants/constants";
import { namesWeek } from "../Contants/constants";

const CalendarPages = () => {
  const lastDay = lastDayOfMonth(new Date());
  const firstDay = startOfMonth(new Date());

  const prevMonth = addDays(firstDay, -format(firstDay, "i") + 1);
  const nextMonth = addDays(lastDay, 7 - format(lastDay, "i"));

  const allDaysOfMonth = eachDayOfInterval({
    start: prevMonth,
    end: nextMonth,
  });
  const formatDate = (check) => format(new Date(), check, { locale: ru });
  return (
    <div className="ui-datepicker">
      <CalendarHeader formatDate={formatDate} />
      <table className="ui-datepicker-calendar">
        <colgroup>
          {namesWeek.map((name) => (
            <col
              className={cn({
                "ui-datepicker-week-end": name === "Сб" || name === "Вс",
              })}
              key={name}
            />
          ))}
        </colgroup>
        <CalendarWeek namesWeek={namesWeek} />
        <CalendarDates allDaysOfMonth={allDaysOfMonth} countWeek={countWeek} />
      </table>
    </div>
  );
};

export default CalendarPages;
