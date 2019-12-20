import React from "react";
import PropTypes from "prop-types";
import DropdownMenu from "@paprika/dropdown-menu";
import { useDataTableState, useDispatch } from "../../../..";
import SortTrigger from "./SortTrigger";
import { sortDirections, plugins } from "../../../../constants";
import { useLocalStorage } from "../../../../context";
import useIsUpdated from "../../../../hooks/useIsUpdated";

const propTypes = {
  onSort: PropTypes.func,
  defaultSortColumn: PropTypes.string,
  defaultSortDirection: PropTypes.oneOf([sortDirections.ASCEND, sortDirections.DESCEND]),
};

const defaultProps = {
  onSort: null,
  defaultSortColumn: null,
  defaultSortDirection: null,
};

const noop = () => {};

export default function Sort(props) {
  const { onSort, defaultSortColumn, defaultSortDirection } = props;
  const { sortColumn, sortDirection, columns, columnsOrder } = useDataTableState();
  const dispatch = useDispatch();
  const hasColumnCanBeSorted = !!columnsOrder.find(columnId => columns[columnId].canSort);
  const updateLocalStorage = useLocalStorage();
  const isSortColumnUpdated = useIsUpdated(sortColumn);
  const isSortDirectionUpdated = useIsUpdated(sortDirection);

  React.useEffect(() => {
    if (defaultSortColumn && defaultSortDirection) {
      dispatch({
        type: "SORT",
        payload: { columnId: defaultSortColumn, direction: defaultSortDirection },
      });
    }
    // Only runs for first time
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (!isSortColumnUpdated && !isSortDirectionUpdated) return;

    updateLocalStorage({ sortColumn, sortDirection });
    if (onSort) onSort({ columnId: sortColumn, direction: sortDirection });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortColumn, sortDirection]);

  if (!hasColumnCanBeSorted) return null;

  return (
    <DropdownMenu align="bottom">
      <DropdownMenu.Trigger>
        {sortColumn && sortDirection ? `Sort ${sortColumn} by ${sortDirection}` : "Sort"}
      </DropdownMenu.Trigger>
      {columnsOrder.map(columnId => {
        const { id, canSort, momentParsingFormat } = columns[columnId];
        if (!canSort) return null;

        return (
          <DropdownMenu.Item key={columnId} onClick={noop}>
            Sort {id} by
            {Object.keys(sortDirections).map(key => (
              <SortTrigger
                key={sortDirections[key]}
                columnId={columnId}
                direction={sortDirections[key]}
                momentParsingFormat={momentParsingFormat}
              />
            ))}
          </DropdownMenu.Item>
        );
      })}
    </DropdownMenu>
  );
}

Sort.reducer = (state, action) => {
  if (action.type === "SORT")
    return {
      ...action.changes,
      sortColumn: action.payload.columnId,
      sortDirection: action.payload.direction,
    };

  return action.changes;
};

Sort.propTypes = propTypes;
Sort.defaultProps = defaultProps;
Sort.displayName = plugins.SORT;
