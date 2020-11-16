import React from "react";
import OverflowMenu from "../../src";

const AutoFocusExample = () => {
  return (
    <div>
      <p>
        Use the keyboard to tab over the links and expand the OverflowMenu. Then tab out of the OverflowMenu and see
        where the focus goes -- it should NOT go back onto the OverflowMenu.
      </p>
      <hr />
      <h3>Default Trigger Type (Simple)</h3>
      <a href="http://google.ca">Link 1</a>&nbsp;
      <OverflowMenu align="bottom">
        <OverflowMenu.Trigger>Open/Close</OverflowMenu.Trigger>
        <OverflowMenu.Item onClick={() => {}}>First Item</OverflowMenu.Item>
        <OverflowMenu.Item onClick={() => {}}>Second Item</OverflowMenu.Item>
      </OverflowMenu>
      &nbsp;<a href="http://google.ca">Link 2</a>
      <hr />
      <h3>Icon Trigger Type</h3>
      <a href="http://google.ca">Link 1</a>&nbsp;
      <OverflowMenu align="bottom">
        <OverflowMenu.Trigger buttonType={OverflowMenu.Trigger.types.button.ICON}>x</OverflowMenu.Trigger>
        <OverflowMenu.Item onClick={() => {}}>First Item</OverflowMenu.Item>
        <OverflowMenu.Item onClick={() => {}}>Second Item</OverflowMenu.Item>
      </OverflowMenu>
      &nbsp;<a href="http://google.ca">Link 2</a>
      <hr />
      <h3>Raw Trigger Type</h3>
      <a href="http://google.ca">Link 1</a>&nbsp;
      <OverflowMenu align="bottom">
        <OverflowMenu.Trigger buttonType={OverflowMenu.Trigger.types.button.RAW}> X </OverflowMenu.Trigger>
        <OverflowMenu.Item onClick={() => {}}>First Item</OverflowMenu.Item>
        <OverflowMenu.Item onClick={() => {}}>Second Item</OverflowMenu.Item>
      </OverflowMenu>
      &nbsp;<a href="http://google.ca">Link 2</a>
      <hr />
    </div>
  );
};

export default AutoFocusExample;
