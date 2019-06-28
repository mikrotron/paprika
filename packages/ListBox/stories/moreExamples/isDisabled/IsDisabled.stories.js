import React from "react";
import { storiesOf } from "@storybook/react";
import { Frame } from "../../stories.styles";
import IsDisabled from "./IsDisabled";

storiesOf("Forms | ListBox / more examples", module).add("Is disabled", () => (
  <Frame>
    <IsDisabled />
  </Frame>
));
