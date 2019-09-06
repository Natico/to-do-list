import React from 'react'
import { Table } from 'semantic-ui-react';

const TableViewBodyRow = (props) => (


    <Table.Row>
        <Table.Cell>{props.taskObject.id}</Table.Cell>
        <Table.Cell>{props.taskObject.name}</Table.Cell>
        <Table.Cell>{props.taskObject.startTime}</Table.Cell>
        <Table.Cell>{props.taskObject.endTime}</Table.Cell>
    </Table.Row>

)


export default TableViewBodyRow;

