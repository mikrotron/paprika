import React from "react";
import { storiesOf } from "@storybook/react";
import * as Sbook from "storybook/assets/styles/common.styles";
import Resizer from "storybook/components/Resizer";
import Heading from "@paprika/heading";
import ActionBar, { ColumnsArrangement, useColumnsArrangement } from "../../ActionBar/src";
import DataGrid from "../src";
import fixtures from "./helpers/fixtures";

const data = fixtures(1);

function AppWithActionBar() {
  const { orderedColumnIds, isColumnHidden, ...handlers } = useColumnsArrangement(["goals", "name", "status"]);

  const renderColumns = type => {
    const column = {
      goals: {
        cell: () => "Goals",
        cellA11yText: () => "Goals",
        header: "Goals (grows)",
        canGrow: true,
      },
      name: {
        cell: () => "Name",
        cellA11yText: () => "Name",
        header: "Name",
        canGrow: false,
      },
      status: {
        cell: () => "Status",
        cellA11yText: () => "Status",
        header: "Status",
        canGrow: false,
      },
    };

    return column[type];
  };

  return (
    <React.Fragment>
      <Sbook.Story>
        <Heading level={2}>DataGrid with Resizer</Heading>
        <Resizer initWidth={640} initHeight={700}>
          <ActionBar>
            <ColumnsArrangement orderedColumnIds={orderedColumnIds} {...handlers}>
              <ColumnsArrangement.ColumnDefinition id="goals" label="Goals" isHidden={isColumnHidden("goals")} />
              <ColumnsArrangement.ColumnDefinition id="name" label="Name" isHidden={isColumnHidden("name")} />
              <ColumnsArrangement.ColumnDefinition id="status" label="Status" isHidden={isColumnHidden("status")} />
            </ColumnsArrangement>
          </ActionBar>
          <DataGrid key={orderedColumnIds.join("-")} data={data}>
            {orderedColumnIds.map(
              columnKey =>
                !isColumnHidden(columnKey) && (
                  <DataGrid.ColumnDefinition
                    cell={renderColumns(columnKey).cell}
                    header={renderColumns(columnKey).header}
                    canGrow={renderColumns(columnKey).canGrow}
                    cellA11yText={renderColumns(columnKey).cellA11yText}
                  />
                )
            )}
          </DataGrid>
        </Resizer>
      </Sbook.Story>
    </React.Fragment>
  );
}

storiesOf("DataGrid / resize", module).add("Resize with Resizer", () => <AppWithActionBar />);
