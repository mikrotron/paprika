import React from "react";
import { storiesOf } from "@storybook/react";
import DataTable from "../src";
import fixtures from "./fixtures";
import { viewPortHeight } from "./helpers";

const data = fixtures(10);

function Checkbox(props) {
  const handleRowSelected = rowIndex => () => {
    props.onRowSelected(rowIndex);
  };
  return (
    <input type="checkbox" onClick={handleRowSelected(props.rowIndex)} checked={props.isRowSelected(props.rowIndex)} />
  );
}

function App() {
  const [selected, setSelected] = React.useState([]);
  const handleRowSelected = rowIndex => {
    setSelected(selected => {
      // for example purpose I'm using rowIndex but you should relay on
      // an id or another mechanism an not on the rowIndex which can change
      // at the moment rows are added or remove from the data prop.

      // remove duplicate items
      const nextState = [...new Set([...selected, rowIndex])];
      return nextState;
    });
  };

  // const isRowSelected = React.useCallback((row, rowIndex) => {}, []);
  const isRowSelected = rowIndex => {
    // stale state
    if (!selected.length) return false;

    return selected.includes(rowIndex);
  };

  return (
    <React.Fragment>
      <DataTable
        keygen="id"
        data={data}
        width={720}
        height={viewPortHeight()}
        onRowSelected={handleRowSelected}
        isRowSelected={isRowSelected}
      >
        <DataTable.ColumnRowIndicator
          id="indicator"
          canHide={false}
          width={40}
          cell={(row, rowIndex, { onRowSelected, isRowSelected }) => {
            return <Checkbox rowIndex={rowIndex} onRowSelected={onRowSelected} isRowSelected={isRowSelected} />;
          }}
        />
        <DataTable.ColumnDefinition id="country" header="Country" cell="country" />
        <DataTable.ColumnDefinition id="name" header="Name" cell="name" />
        <DataTable.ColumnDefinition id="goals" header="Goals" cell="goals" />
        <DataTable.ColumnDefinition id="status" header="Status" cell="status" />
      </DataTable>
    </React.Fragment>
  );
}

storiesOf("DataTable", module).add("Row Indicator", () => <App />);
