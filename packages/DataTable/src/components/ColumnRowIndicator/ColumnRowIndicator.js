import React from "react";
import PropTypes from "prop-types";
import * as styled from "./ColumnRowIndicator.styles";

const propTypes = {
  hasSelectableCheckbox: PropTypes.bool,
};

const defaultProps = {
  hasSelectableCheckbox: true,
};

function renderCellColumnRowIndicator(row, index) {
  return <styled.Cell>{index}</styled.Cell>;
}

function getCellProps(props) {
  const { hasSelectableCheckbox } = props;
  return {
    id: "DataTable.ColumnRowIndicator",
    width: 40,
    header: "",
    cell: renderCellColumnRowIndicator,
    canHide: false,
    customColumn: true,
    hasSelectableCheckbox,
  };
}

export default function ColumnRowIndicator() {
  return null;
}

ColumnRowIndicator.propTypes = propTypes;
ColumnRowIndicator.defaultProps = defaultProps;
ColumnRowIndicator.displayName = "DataTable.ColumnRowIndicator";
ColumnRowIndicator.getCellProps = getCellProps;
