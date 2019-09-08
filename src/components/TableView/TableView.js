import React from "react";
import TableViewBodyRow from "./TableViewBodyRow";
import TableViewHeader from "./TableViewHeader";
import { Table } from "semantic-ui-react";

const TableView = props => {

    const tasksObject = [
        { id: 1, name: "test1", startTime: "2019-08-12", endTime: "2019-08-13" },
        { id: 2, name: "test2", startTime: "2019-08-13", endTime: "2019-08-14" },
        { id: 3, name: "test3", startTime: "2019-08-14", endTime: "2019-08-15" },
        { id: 4, name: "test4", startTime: "2019-08-15", endTime: "2019-08-16" },
        { id: 5, name: "test5", startTime: "2019-08-16", endTime: "2019-08-17" }
      ];

  const tasks = tasksObject;
  const TableBodyRow = tasks.map(task => (
    <TableViewBodyRow taskObject={task}></TableViewBodyRow>
  ));

  return (
    <Table celled compact definition>
      <Table.Header>
        <TableViewHeader taskObject={tasksObject[0]}></TableViewHeader>
      </Table.Header>

      <Table.Body>{TableBodyRow}</Table.Body>
    </Table>
  );
};

export default TableView;
