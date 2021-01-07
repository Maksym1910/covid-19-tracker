import React from 'react';
import './Table.css'

const Table = ({ tableData }) => {
  return (
    <div className='table'>
      {tableData.map(({ country, cases }) => (
          <tr>
            <td>{country}</td>
            <td>{cases}</td>
          </tr>
      ))}
    </div>
  );
};

export default Table;