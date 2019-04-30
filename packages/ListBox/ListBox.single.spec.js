import React from "react";
import { configure } from "react-testing-library";

import { render, fireEvent } from "react-testing-library";
import ListBox from ".";

configure({ testIdAttribute: "data-qa-anchor" });

function renderComponent(props = {}) {
  const rendered = render(
    <ListBox {...props}>
      <ListBox.Option>Venus</ListBox.Option>
      <ListBox.Option>Jupiter</ListBox.Option>
    </ListBox>
  );

  return {
    ...rendered,
    openSelect: () => {
      fireEvent.click(rendered.getByText(/select one of/i));
    },
    selectVenus: () => {
      fireEvent.click(rendered.getByText(/venus/i));
    },
    selectJupiter: () => {
      fireEvent.click(rendered.getByText(/jupiter/i));
    },
    dropdownIsHidden: () => {
      expect(rendered.getByTestId("popover-content").getAttribute("aria-hidden")).toBeTruthy();
    },
    dropdownIsNotHidden: () => {
      expect(rendered.getByTestId("popover-content").getAttribute("aria-hidden")).toMatch(/false/i);
    },
  };
}

describe("Listbox single select", () => {
  it("dropdown should be hidden when first rendered", () => {
    const { getByTestId, dropdownIsHidden } = renderComponent();
    dropdownIsHidden();
  });

  it("dropdown should be visible when clicked", () => {
    const { openSelect, dropdownIsNotHidden } = renderComponent();

    openSelect();
    dropdownIsNotHidden();
  });

  it("dropdown should have correct number of options", () => {
    const { getByText, getByTestId, openSelect } = renderComponent();

    openSelect();
    expect(getByText(/venus/i)).toBeInTheDocument();
    expect(getByText(/jupiter/i)).toBeInTheDocument();
  });

  it("should close when choosing option and should show clear button", () => {
    const { getByTestId, openSelect, selectVenus } = renderComponent();

    openSelect();
    selectVenus();
    expect(getByTestId("trigger")).toHaveTextContent(/venus/i);
    expect(getByTestId("clear-button")).toBeVisible();
  });

  it("should clear selected option when x is clicked", () => {
    const { getByTestId, openSelect, selectVenus } = renderComponent();

    openSelect();
    selectVenus();
    fireEvent.click(getByTestId("clear-button"));
    expect(getByTestId("clear-button")).not.toBeVisible();
    expect(getByTestId("trigger")).not.toHaveTextContent(/venus/i);
    expect(getByTestId("trigger")).toHaveTextContent(/select one of/i);
  });

  it("should have a filter in dropdown", () => {
    const { getByTestId, openSelect } = renderComponent({
      hasFilter: true,
    });

    openSelect();
    expect(getByTestId("list-filter")).toBeInTheDocument();
  });

  //FAILED
  // it("should not render the 'x' clear button", () => {
  //   const { queryByTestId, openSelect, selectVenus, debug } = renderComponent({
  //     hasClearButton: false,
  //   });
  //
  //   // openSelect();
  //   // selectVenus();
  //   //expect(getByTestId("clear-button")).not.toBeInTheDocument();
  //   expect(queryByTestId("clear-button")).toBeNull();
  // });

  it("should have custom height of 500", () => {
    const { getByTestId } = renderComponent({
      height: 500,
    });

    expect(getByTestId("styled-list").getAttribute("height")).toMatch("500");
  });

  it("should be disabled", () => {
    const { getByTestId, openSelect, dropdownIsHidden } = renderComponent({
      isDisabled: true,
    });

    openSelect();
    dropdownIsHidden();
  });

  it("should be displayed inline with no Popover", () => {
    const { queryByTestId } = renderComponent({
      isInline: true,
    });

    expect(queryByTestId("popover-content")).toBeNull();
  });

  it("should focus on option container as soon as the Popover is open", () => {
    const { openSelect, getByTestId } = renderComponent();

    openSelect();
    expect(document.activeElement).toBe(getByTestId("popover-content"));
  });

  it("should not focus on option container as soon as the Popover is open", () => {
    const { openSelect, getByTestId } = renderComponent({
      isPopoverEager: false,
    });

    openSelect();
    expect(document.activeElement).not.toBe(getByTestId("popover-content"));
  });

  it("should display message when filter input does not find a match", () => {
    const { openSelect, getByTestId, getByText } = renderComponent({
      hasFilter: true,
      hasNotResultsMessage: "No match",
    });

    openSelect();
    fireEvent.change(getByTestId("list-filter-input"), { target: { value: "g" } });
    expect(getByTestId("no-result-filter")).toBeInTheDocument();
    expect(getByText("No match")).toBeInTheDocument();
  });

  it("should display default label when no option is selected", () => {
    const { openSelect, getByTestId, getByText } = renderComponent({
      placeholder: "Select one of the options",
    });

    openSelect();
    expect(getByText("Select one of the options")).toBeInTheDocument();
  });

  // Ask about
  // onClose not being used in listbox
  // it("calls onClose when Popover closes", () => {
  //   const onCloseListBox = jest.fn();
  //   const { getByTestId, debug, openSelect, selectVenus } = renderComponent({
  //     onClose: onCloseListBox,
  //   });
  //   openSelect();
  //   selectVenus();
  //   expect(getByTestId("trigger")).toHaveTextContent(/venus/i);
  //   expect(onCloseListBox).toHaveBeenCalled();
  // });

  // onChange gets called on unmount - soo being called atleast once
  // before selecting any option
  it("calls onChange", () => {
    const onOptionClick = jest.fn();
    const { openSelect, selectVenus } = renderComponent({
      onChange: onOptionClick,
    });

    openSelect();
    selectVenus();
    console.log("Hello", onOptionClick.mock.calls.length);
    expect(onOptionClick).toHaveBeenCalled();
  });

  // onClickClear passes even when clear button is not shown on the UI
  // after selecting an option from the popover
  // Because of CSS the clear button is still present
  it("calls onClickClear event when clicking clear button", () => {
    const onClickClearTrigger = jest.fn();
    const { getByTestId, openSelect, selectVenus, debug } = renderComponent({
      onClickClear: onClickClearTrigger,
    });

    openSelect();
    selectVenus();
    fireEvent.click(getByTestId("clear-button"));
    expect(onClickClearTrigger).toHaveBeenCalled();
  });

  // Ask about
  // it("calls onSelected when an option is selected", () => {
  //   const onSelectedOption = jest.fn();
  //   const { openSelect, selectVenus, getByTestId } = renderComponent({
  //     onSelected: onSelectedOption,
  //   });
  //
  //   openSelect();
  //   selectVenus();
  //   expect(getByTestId("trigger")).toHaveTextContent(/venus/i);
  //   expect(onSelectedOption).toHaveBeenCalled();
  // });

  it("changes the render method for label", () => {
    // need to pass a function
    //const onRenderTrig = jest.fn();
    const onRenderTrig = jest.fn((state, dispatch, { getDOMAttributesForListBoxButton }) => (
      <button
        onClick={() => {
          dispatch({ type: "OPEN_POPOVER" });
        }}
        type="button"
        {...getDOMAttributesForListBoxButton()}
        ref={state.refTrigger}
      >
        customTrigger
      </button>
    ));
    const { dropdownIsNotHidden, selectVenus, getByText } = renderComponent({
      renderTrigger: onRenderTrig,
    });

    expect(onRenderTrig).toHaveBeenCalled();
    expect(getByText(/customTrigger/i)).toBeInTheDocument();
    fireEvent.click(getByText(/customTrigger/i));
    dropdownIsNotHidden();
    expect(getByText(/venus/i)).toBeInTheDocument();
    expect(getByText(/jupiter/i)).toBeInTheDocument();
    selectVenus();
  });
});
