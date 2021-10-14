import React from "react";
import "../App.css";
import Columns from "./columns";
import TableWeek from "./tableWeek";
import TableDays from "./tableDays";

const Tables = () => {
  return (
    <table className="ui-datepicker-calendar">
      <Columns />
      <TableWeek />
      <TableDays />
    </table>
  );
};

export default Tables;
