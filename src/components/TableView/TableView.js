import React from "react";
import TableViewBodyRow from "./TableViewBodyRow";
import TableViewHeader from "./TableViewHeader";
import { Table } from "semantic-ui-react";

const TableView = props => {
  const tasks = props.tasksObject;
  const TableBodyRow = tasks.map(task => (
    <TableViewBodyRow taskObject={task}></TableViewBodyRow>
  ));

  return (
    <Table celled compact definition>
      <Table.Header>
        <TableViewHeader taskObject={props.tasksObject[0]}></TableViewHeader>
      </Table.Header>

      <Table.Body>{TableBodyRow}</Table.Body>
    </Table>
  );
};

export default TableView;
