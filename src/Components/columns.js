import React from "react";
import "../App.css";
import cn from "classnames";

const Columns = ({ namesWeek }) => {
  return (
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
  );
};

export default Columns;
