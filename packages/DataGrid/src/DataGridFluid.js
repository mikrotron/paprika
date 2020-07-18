import React from "react";
import PropTypes from "prop-types";
import AutoSizer from "react-virtualized-auto-sizer";
import ResizeDetector, { useDimensions } from "../../ResizeDetector"; // update to @paprika/resize-detector
import DataGrid from "./DataGrid";
import ColumnDefinition from "./components/ColumnDefinition";
import Basement from "./components/Basement";
import InfiniteScroll from "./components/InfiniteScroll";

const propTypes = {
  ...DataGrid.propTypes,
  debounceDelay: PropTypes.number,
};
delete propTypes.width;

const defaultProps = {
  ...DataGrid.defaultProps,
  debounceDelay: null,
};
delete defaultProps.width;

function DataGridWithProvider(props) {
  const { width } = useDimensions();

  return <DataGrid {...props} width={width} />;
}

function DataGridFluid(props) {
  const { debounceDelay, ...dataGridProps } = props;

  if (debounceDelay === null) {
    return (
      <AutoSizer disableHeight data-pka-anchor="data-grid.container">
        {({ width }) => <DataGrid {...props} width={width} />}
      </AutoSizer>
    );
  }

  return (
    <ResizeDetector debounceDelay={debounceDelay} data-pka-anchor="data-grid.container">
      <DataGridWithProvider {...dataGridProps} />
    </ResizeDetector>
  );
}

DataGridFluid.displayName = "DataGrid.FullWidth";
DataGridFluid.propTypes = propTypes;
DataGridFluid.defaultProps = defaultProps;
DataGridFluid.ColumnDefinition = ColumnDefinition;
DataGridFluid.InfiniteScroll = InfiniteScroll;
DataGridFluid.Basement = Basement;

export default DataGridFluid;
