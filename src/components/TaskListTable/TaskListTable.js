import React from 'react'
import TaskListRow from './TaskListRow'
import { Button, Icon, Table } from 'semantic-ui-react';

const TaskListTable = (props) => {
    const tasks = props.tasksObject;
    const TableRow = tasks.map((task) =>
        <TaskListRow taskObject={task}></TaskListRow>
    );
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
                {TableRow}
            </Table.Body>

            <Table.Footer fullWidth>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell colSpan='4'>
                        <Button floated='right' icon labelPosition='left' primary size='small' >
                            <Icon name='user' /> Add User
                    </Button>
                        <Button size='small'>Approve</Button>
                        <Button disabled size='small'>
                            Approve All
                    </Button>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>

        </Table>
    )
}


export default TaskListTable;

