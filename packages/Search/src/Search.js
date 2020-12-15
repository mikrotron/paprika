import React from "react";
import PropTypes from "prop-types";
import ListBox from "@paprika/list-box";
import SearchIcon from "@paprika/icon/lib/Search";
import useI18n from "@paprika/l10n/lib/useI18n";
import { filter } from "@paprika/list-box/lib/helpers/filter";
import renderTrigger from "./renderTrigger";
import useTrigger from "./useTrigger";

const propTypes = {
  children: PropTypes.instanceOf(ListBox.Option).isRequired,
  onChangeSearch: PropTypes.func,
  onSelected: PropTypes.func,
};

const defaultProps = {
  onChangeSearch: () => {},
  onSelected: () => {},
};
export default function Search(props) {
  const refSelected = React.useRef(null);
  const { children, onChangeSearch, onSelected, ...moreProps } = props;
  const { t } = useI18n();
  const {
    inputValue,
    onBlurInput,
    onBlurTrigger,
    onChangeInput,
    onClickTrigger,
    onKeyDownTrigger,
    refInput,
    refListBoxReducer,
    resetValue,
    setInputValue,
  } = useTrigger();

  const countOptions = React.useMemo(() => {
    let count = 0;
    React.Children.forEach(children, child => {
      if (child.type.displayName === "ListBox.Option") count += 1;
    });

    return count;
  }, [children]);

  const refDivRoot = React.useRef(null);
  /* eslint-disable react/prop-types */
  const size =
    typeof props.size !== "undefined" && Object.keys(ListBox.types.size).includes(props.size.toUpperCase())
      ? props.size
      : ListBox.types.size.MEDIUM;
  /* eslint-enable react/prop-types */

  function processSelected(value) {
    const dispatch = refListBoxReducer.current.dispatch;
    const types = refListBoxReducer.current.types;

    const actions = {
      open() {
        dispatch({ type: types.openPopover });
      },
      close() {
        dispatch({ type: types.closePopover });
      },
      cleanInput() {
        resetValue(); // input search value
      },
      setInput(value) {
        setInputValue(value);
      },
    };
    refSelected.current = null; // selected ref value
    onSelected(value, actions);
  }

  function handleChange(index, options, attributes) {
    const { eventType } = attributes;

    if (eventType.includes("click")) {
      const { value, label } = options[index].content.props;
      processSelected({
        value,
        label,
      });
      return;
    }

    refSelected.current = options[index];
  }

  function onSubmit() {
    if (refSelected.current) {
      const { value, label } = refSelected.current.content.props;
      processSelected({
        value,
        label,
      });
    }

    // processSelected(null);
  }

  return (
    <div ref={refDivRoot}>
      <ListBox size={size} onChange={handleChange} {...moreProps}>
        <ListBox.Popover shouldKeepFocus />
        <ListBox.Trigger>
          {renderTrigger({
            countOptions,
            inputValue,
            onBlurInput,
            onBlurTrigger,
            onChangeInput,
            onChangeSearch,
            onClickTrigger,
            onKeyDownTrigger,
            onSubmit,
            refInput,
            refListBoxReducer,
            size,
            t,
          })}
        </ListBox.Trigger>
        {inputValue ? (
          <ListBox.Option value={inputValue} label={inputValue}>
            <SearchIcon /> {inputValue} - <em>Search term...</em>
          </ListBox.Option>
        ) : null}
        {React.Children.count(children) > 0 ? children : null}
      </ListBox>
    </div>
  );
}

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;
Search.Option = ListBox.Option;
Search.filter = filter;
Search.RawItem = ListBox.RawItem;
Search.Divider = ListBox.Divider;
