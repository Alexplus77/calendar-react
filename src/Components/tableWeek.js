import React from "react";
import "../App.css";

const TableWeek = ({ namesWeek }) => {
  return (
    <thead>
      <tr>
        {namesWeek.map((name) => (
          <th key={name} scope="col">
            {name}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableWeek;
