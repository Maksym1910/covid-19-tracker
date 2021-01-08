import React from "react";
import "./Table.css";

const Table = ({ tableData }) => {
  return (
    <div className="table">
      {tableData.map(({ country, cases }) => (
        // eslint-disable-next-line react/jsx-key
          <tr>
            <td>{country}</td>
            <td>
              <strong>{cases.toLocaleString()}</strong>
            </td>
          </tr>
      ))}
    </div>
  );
};

export default Table;
