import React from "react";
import "../App.css";

const Header = ({ date }) => {
  const monthNow = date.toLocaleString("ru", { month: "long" });
  const weekDay = date.toLocaleString("ru", { weekday: "long" });
  return (
    <div>
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{weekDay}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
          <div className="ui-datepicker-material-month">{monthNow}</div>
          <div className="ui-datepicker-material-year">
            {date.getFullYear()}
          </div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{monthNow}</span>&nbsp;
          <span className="ui-datepicker-year">{date.getFullYear()}</span>
        </div>
      </div>
    </div>
  );
};
export default Header;
