import React from "react";
import "./header";
import "../App.css";
import Header from "./header";

const Calendar = () => {
  const date = new Date();
  return (
    <div className="ui-datepicker">
      <Header date={date} />
    </div>
  );
};

export default Calendar;
