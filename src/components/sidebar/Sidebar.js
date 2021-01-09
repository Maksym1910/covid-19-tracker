import React from 'react';
import {Card, CardContent} from "@material-ui/core";
import Table from "./Table/Table";
import LineGraph from "./LineGraph";
import './Sidebar.css';

const Sidebar = ({ tableData }) => {
  return (
    <Card className='sidebar'>
      <CardContent>
        <h3>Live Cases by Country</h3>
        <Table tableData={tableData} />
        <h4 className='sidebar__chart'>Worldwide new cases</h4>
        <LineGraph />
      </CardContent>
    </Card>
  );
};

export default Sidebar;