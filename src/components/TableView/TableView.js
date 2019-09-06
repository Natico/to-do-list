import React from 'react'
import TableViewBodyRow from './TableViewBodyRow'
import { Button, Icon, Table } from 'semantic-ui-react';

const TableView = (props) => {
    const tasks = props.tasksObject;
    const TableBodyRow = tasks.map((task) =>
        <TableViewBodyRow taskObject={task}></TableViewBodyRow>
    );
    // const TableHeaderRow = tasks.map((task) =>
    //     <TableViewRow taskObject={task}></TableViewRow>
    // );

    return (
        <Table celled compact definition>
            <Table.Header fullWidth>
                <Table.Row>
                    <Table.HeaderCell>id</Table.HeaderCell>
                    <Table.HeaderCell>name</Table.HeaderCell>
                    <Table.HeaderCell>startTime</Table.HeaderCell>
                    <Table.HeaderCell>endTime</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {TableBodyRow}
            </Table.Body>

        </Table>
    )
}


export default TableView;

