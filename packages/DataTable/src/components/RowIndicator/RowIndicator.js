import React from "react";
import PropTypes from "prop-types";
import CheckBox from "@paprika/checkbox";
import * as styled from "./RowIndicator.styles";

const propTypes = {
  row: PropTypes.shape({}).isRequired,
  onRowSelected: PropTypes.func,
  isRowSelected: PropTypes.func,
  rowIndex: PropTypes.number.isRequired,
};

const defaultProps = {
  onRowSelected: () => {},
  isRowSelected: () => false,
};

export default function RowIndicator(props) {
  const { row, rowIndex, onRowSelected, isRowSelected } = props;
  const [isCheckboxVisible, setIsCheckboxVisible] = React.useState(false);
  const refIsRowSelected = React.useRef(isRowSelected);
  const refonRowSelected = React.useRef(onRowSelected);

  React.useEffect(() => {
    refIsRowSelected.current = isRowSelected;
    refonRowSelected.current = onRowSelected;
  });

  const handleClick = event => {
    refonRowSelected.current(row, rowIndex, event);
  };

  function handleMouseEnter() {
    setIsCheckboxVisible(() => true);
  }

  function handleMouseLeave() {
    // if (isRowSelected) return;

    setIsCheckboxVisible(() => false);
  }

  const checked = refIsRowSelected.current(row, rowIndex) ? "checked" : "unchecked";
  return (
    <styled.Cell onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isCheckboxVisible || checked ? (
        <CheckBox checkedState={checked} onChange={() => {}} onClick={handleClick} size="small" />
      ) : (
        rowIndex
      )}
    </styled.Cell>
  );
}

RowIndicator.propTypes = propTypes;
RowIndicator.defaultProps = defaultProps;
RowIndicator.displayName = "DataTable.RowIndicator";
