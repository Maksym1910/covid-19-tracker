import React from "react";
import "./Table.css";

const Table = ({ tableData }) => {
  return (
    <div className="table">
      <table>
        <tbody>
          {tableData.map(({ country, cases }) => (
            // eslint-disable-next-line react/jsx-key
            <tr>
              <td>{country}</td>
              <td>
                <strong>{cases.toLocaleString()}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
