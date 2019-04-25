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
  };
}

describe("Listbox single select", () => {
  it("dropdown should be hidden when first rendered", () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId("popover-content").getAttribute("aria-hidden")).toBeTruthy();
  });

  it("dropdown should be visible when clicked", () => {
    const { getByText, getByTestId, openSelect } = renderComponent();

    openSelect();
    expect(getByTestId("popover-content").getAttribute("aria-hidden")).toMatch(/false/i);
  });

  it("dropdown should have correct number of options", () => {
    const { getByText, getByTestId, openSelect } = renderComponent();

    openSelect();
    expect(getByText(/venus/i)).toBeInTheDocument();
    expect(getByText(/jupiter/i)).toBeInTheDocument();
  });

  it("should close when choosing option and should show", () => {
    const { getByText, getByTestId, openSelect, selectVenus } = renderComponent();

    openSelect();
    selectVenus();
    expect(getByTestId("trigger")).toHaveTextContent(/venus/i);
    expect(getByTestId("clear-button")).toBeVisible();
  });

  it("should clear selected option when x is clicked", () => {
    const { getByText, getByTestId, openSelect, selectVenus } = renderComponent();

    openSelect();
    selectVenus();
    fireEvent.click(getByTestId("clear-button"));
    expect(getByTestId("clear-button")).not.toBeVisible();
    expect(getByTestId("trigger")).not.toHaveTextContent(/venus/i);
    expect(getByTestId("trigger")).toHaveTextContent(/select one of/i);
  });

  it("should be disabled", () => {
    const { debug, openSelect } = renderComponent({
      isDisabled: true,
    });

    debug();
  });

  it("callback with selected index return", () => {
    const onChange = jest.fn();
    const {} = renderComponent({
      onChange: jest.fn(),
    });
  });
});
