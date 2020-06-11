import React from "react";
import { storiesOf } from "@storybook/react";
import * as Sbook from "storybook/assets/styles/common.styles";
import Resizer from "storybook/components/Resizer";
import Heading from "@paprika/heading";
import ActionBar, { ColumnsArrangement, useColumnsArrangement } from "../../ActionBar/src";
import { DataGridFullWidth } from "../src";
import fixtures from "./helpers/fixtures";

const data = fixtures(10);

function App({ debounceDelay }) {
  const { orderedColumnIds, isColumnHidden, ...handlers } = useColumnsArrangement(["name", "goals", "status"]);

  const renderColumns = type => {
    const column = {
      name: {
        cell: "name",
        cellA11yText: () => "Name",
        header: "Name (canGrow)",
        canGrow: true,
      },
      goals: {
        cell: "goals",
        cellA11yText: () => "Goals",
        header: "Goals",
        canGrow: false,
      },
      status: {
        cell: "status",
        cellA11yText: () => "Status",
        header: "Status",
        canGrow: false,
      },
    };

    return column[type];
  };

  return (
    <Sbook.Story>
      <Heading level={2}>DataGrid with Resizer</Heading>
      <Resizer initWidth={640} initHeight={505}>
        <ActionBar>
          <ColumnsArrangement orderedColumnIds={orderedColumnIds} {...handlers}>
            <ColumnsArrangement.ColumnDefinition id="name" label="Name" isHidden={isColumnHidden("name")} />
            <ColumnsArrangement.ColumnDefinition id="goals" label="Goals" isHidden={isColumnHidden("goals")} />
            <ColumnsArrangement.ColumnDefinition id="status" label="Status" isHidden={isColumnHidden("status")} />
          </ColumnsArrangement>
        </ActionBar>
        <DataGridFullWidth key={orderedColumnIds.join("-")} data={data} debounceDelay={debounceDelay} height={400}>
          {orderedColumnIds.map(
            columnKey =>
              !isColumnHidden(columnKey) && (
                <DataGridFullWidth.ColumnDefinition
                  cell={renderColumns(columnKey).cell}
                  header={renderColumns(columnKey).header}
                  canGrow={renderColumns(columnKey).canGrow}
                  cellA11yText={renderColumns(columnKey).cellA11yText}
                />
              )
          )}
        </DataGridFullWidth>
      </Resizer>
    </Sbook.Story>
  );
}

storiesOf("DataGrid / resize", module)
  .addParameters({ options: { showPanel: false } })
  .add("Resize with debounce", () => <App debounceDelay={30} />)
  .add("Resize without debounce", () => <App />);
