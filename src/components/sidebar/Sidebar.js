import React from 'react';
import {Card, CardContent} from "@material-ui/core";
import Table from "./Table";

const Sidebar = ({ tableData }) => {
  return (
    <Card>
      <CardContent>
        <h3>Live Cases by Country</h3>
        <Table tableData={tableData} />
        <h4>Worldwide new cases</h4>
      </CardContent>
    </Card>
  );
};

export default Sidebar;