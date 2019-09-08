import React from "react";
import TableView from "./TableView/TableView";
import FormExampleCaptureValues from "./InsertTaskForm/InsertTaskForm";
import { Grid, Segment } from "semantic-ui-react";




const App = () => (
  <React.Fragment>
    <Grid container columns={1}>
      <Grid.Column>
        <Segment>
          <TableView >
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
