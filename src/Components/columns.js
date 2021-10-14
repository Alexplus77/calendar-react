import React from "react";
import "../App.css";

const Columns = ({ namesWeek }) => {
  return (
    <colgroup>
      {namesWeek.map((name) => (
        <col key={name} />
      ))}
    </colgroup>
  );
};

export default Columns;
