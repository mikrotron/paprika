import React from "react";
import PropTypes from "prop-types";
import AutoSizer from "react-virtualized-auto-sizer";
import ResizeObserver from "../../ResizeDetector";
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
  const { width } = ResizeObserver.useObservedDimensions();

  return <DataGrid {...props} width={width} />;
}

function DataGridFullWidth(props) {
  const { debounceDelay, ...dataGridProps } = props;

  if (debounceDelay === null) {
    return (
      <AutoSizer disableHeight data-pka-anchor="data-grid.container">
        {({ width }) => <DataGrid {...props} width={width} />}
      </AutoSizer>
    );
  }

  return (
    <ResizeObserver debounceDelay={debounceDelay} data-pka-anchor="data-grid.container">
      <DataGridWithProvider {...dataGridProps} />
    </ResizeObserver>
  );
}

DataGridFullWidth.displayName = "DataGrid.FullWidth";
DataGridFullWidth.propTypes = propTypes;
DataGridFullWidth.defaultProps = defaultProps;
DataGridFullWidth.ColumnDefinition = ColumnDefinition;
DataGridFullWidth.InfiniteScroll = InfiniteScroll;
DataGridFullWidth.Basement = Basement;

export default DataGridFullWidth;
