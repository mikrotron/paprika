import React from "react";
import { action } from "@storybook/addon-actions";
import { Story, Small } from "storybook/assets/styles/common.styles";
import { CloseButton } from "../..";

function clickHandler() {
  action("Clicked a button")();
}

const ExampleStory = () => {
  const buttonRef = React.createRef();

  React.useEffect(() => {
    const focusTimer = setTimeout(() => {
      buttonRef.current.focus();
    }, 1000);
    return () => {
      clearTimeout(focusTimer);
    };
  });

  return (
    <Story>
      <p>
        <CloseButton onClick={clickHandler} ref={buttonRef} />
      </p>
      <p>
        <Small>This CloseButton will capture the focus after 1 second.</Small>
      </p>
    </Story>
  );
};

export default ExampleStory;
