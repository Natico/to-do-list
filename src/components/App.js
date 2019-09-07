import React from "react";
import TableView from "./TableView/TableView";
import FormExampleCaptureValues from "./InsertTaskForm/InsertTaskForm";
import { Grid, Image, Segment } from "semantic-ui-react";

const tasksObject = [
  { id: 1, name: "test1", startTime: "2019-08-12", endTime: "2019-08-13" },
  { id: 2, name: "test2", startTime: "2019-08-13", endTime: "2019-08-14" },
  { id: 3, name: "test3", startTime: "2019-08-14", endTime: "2019-08-15" },
  { id: 4, name: "test4", startTime: "2019-08-15", endTime: "2019-08-16" },
  { id: 5, name: "test5", startTime: "2019-08-16", endTime: "2019-08-17" }
];

const App = () => (
  <React.Fragment>
    <Grid container columns={1}>
      <Grid.Column>
        <Segment>
          <TableView tasksObject={tasksObject}>
            <p>TEST</p>
          </TableView>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <FormExampleCaptureValues></FormExampleCaptureValues>
        </Segment>
      </Grid.Column>
    </Grid>
  </React.Fragment>
);

export default App;
