import React from "react";
import PropTypes from "prop-types";
import Checkbox from "@paprika/checkbox";
import * as styled from "./ColumnRowIndicator.styles";

const propTypes = {
  hasCheckbox: PropTypes.bool,
};

const defaultProps = {
  hasCheckbox: false,
};

const renderCell = ({ hasCheckbox, onChange }) => (row, index) => {
  const [isCheckboxVisible, setIsCheckboxVisible] = React.useState(false);

  function handleChange(event) {
    onChange(row, index, event);
  }

  function handleMouseEnter() {
    setIsCheckboxVisible(() => true);
  }

  function handleMouseLeave() {
    setIsCheckboxVisible(() => false);
  }

  if (hasCheckbox) {
    return (
      <styled.Cell onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {isCheckboxVisible ? <Checkbox onChange={handleChange} size="small" /> : index}
      </styled.Cell>
    );
  }
  return <styled.Cell>{index}</styled.Cell>;
};

function getCellProps(props) {
  const { hasCheckbox, onChange } = props;
  return {
    id: "DataTable.ColumnRowIndicator",
    width: 40,
    header: "",
    cell: renderCell({ hasCheckbox, onChange }),
    canHide: false,
  };
}

export default function ColumnRowIndicator() {
  return null;
}

ColumnRowIndicator.propTypes = propTypes;
ColumnRowIndicator.defaultProps = defaultProps;
ColumnRowIndicator.displayName = "DataTable.ColumnRowIndicator";
ColumnRowIndicator.getCellProps = getCellProps;
