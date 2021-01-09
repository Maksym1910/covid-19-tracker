import React from "react";
import numeral from "numeral";
import "./Table.css";

const Table = ({ tableData }) => {
  return (
    <div className="table">
      <table>
        <tbody>
          {tableData.map(({ country, cases }, index) => (
            <tr key={index}>
              <td>{country}</td>
              <td>
                <strong>{numeral(cases).format("0,0")}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
