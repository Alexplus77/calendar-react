import React from "react";
import "./header";
import "../App.css";
import Header from "./header";
import Tables from "./tables";

const Calendar = () => {
  return (
    <div className="ui-datepicker">
      <Header />
      <Tables />
    </div>
  );
};

export default Calendar;
