import React from "react";
import { Table } from "semantic-ui-react";

const TableViewBodyRow = props => {
  const tasks = props.taskObject;
  const cells = Object.keys(tasks).map(task => (
    <Table.HeaderCell>{task}</Table.HeaderCell>
  ));
  return <Table.Row>{cells}</Table.Row>;
};

export default TableViewBodyRow;
