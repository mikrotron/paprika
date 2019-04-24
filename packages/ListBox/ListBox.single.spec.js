import React from "react";
import { render } from "react-testing-library";
import ListBox from ".";

describe("Listbox single selection", () => {
  it("Expect listbox role to exist", () => {
    const { getByRole } = render(
      <ListBox>
        <ListBox.Option>Venus</ListBox.Option>
        <ListBox.Option>Jupiter</ListBox.Option>
      </ListBox>
    );

    expect(getByRole("listbox")).toBeInTheDocument();
  });
});
