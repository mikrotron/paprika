import React from "react";
import { configure } from "react-testing-library";

import { render, fireEvent } from "react-testing-library";
import ListBox from ".";

configure({ testIdAttribute: "data-qa-anchor" });

function renderComponent(props = {}) {
  const rendered = render(
    <ListBox isMulti {...props}>
      <ListBox.Option>Venus</ListBox.Option>
      <ListBox.Option>Jupiter</ListBox.Option>
    </ListBox>
  );

  return {
    ...rendered,
    openSelect: () => {
      fireEvent.click(rendered.getByText(/select one of/i));
    },
    closeSelect: () => {
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

describe("Listbox multi select", () => {
  it("dropdown should be hidden when first rendered", () => {
    const { getByTestId, dropdownIsHidden, debug } = renderComponent();
    dropdownIsHidden();
  });

  it("dropdown should be visible when clicked", () => {
    const { openSelect, dropdownIsNotHidden } = renderComponent();

    openSelect();
    dropdownIsNotHidden();
  });

  it("should show chosen options in trigger", () => {
    const { getByTestId, openSelect, selectVenus, selectJupiter } = renderComponent();

    openSelect();
    selectVenus();
    selectJupiter();
    expect(getByTestId("trigger")).toHaveTextContent(/venus, jupiter/i);
  });

  it("calls onSelected when choosing an option", () => {
    const onSelectedListBox = jest.fn();
    const { getByTestId, openSelect, closeSelect, getByText, selectVenus, debug } = renderComponent({
      onSelected: onSelectedListBox,
    });

    openSelect();
    selectVenus();
    expect(getByTestId("trigger")).toHaveTextContent(/venus/i);
    debug();
    console.log(onSelectedListBox.mock.instances);
    //expect(onSelectedListBox.mock.calls.length).toBe(1);
    expect(onSelectedListBox).toHaveBeenCalled();
  });
});
