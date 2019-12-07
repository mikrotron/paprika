import React from "react";
import { storiesOf } from "@storybook/react";
import DataTable from "../src";
import fixtures from "./fixtures";
import { viewPortHeight } from "./helpers";

const data = fixtures(10);
function App() {
  return (
    <React.Fragment>
      <DataTable keygen="id" data={data} width={720} height={viewPortHeight()}>
        <DataTable.ColumnRowIndicator />
        <DataTable.ColumnDefinition id="country" header="Country" cell="country" />
        <DataTable.ColumnDefinition id="name" header="Name" cell="name" />
        <DataTable.ColumnDefinition id="goals" header="Goals" cell="goals" />
        <DataTable.ColumnDefinition id="status" header="Status" cell="status" />
      </DataTable>
    </React.Fragment>
  );
}

storiesOf("DataTable", module).add("Row Indicator", () => <App />);
