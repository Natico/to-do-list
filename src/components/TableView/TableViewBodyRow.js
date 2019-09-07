import React from "react";
import { Table } from "semantic-ui-react";

const TableViewBodyRow = props => {
  const tasks = props.taskObject;
  const cells = Object.keys(tasks).map(task => (
    // <TableViewBodyRow taskObject={task}></TableViewBodyRow>
    <Table.Cell>{tasks[task]}</Table.Cell>
  ));
  return <Table.Row>{cells}</Table.Row>;
};

export default TableViewBodyRow;

