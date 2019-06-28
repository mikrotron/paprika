import React from "react";
import { storiesOf } from "@storybook/react";
import { Frame } from "../../stories.styles";
import FilterSelect from "./FilterSelect";

storiesOf("Forms | ListBox / more examples", module).add("Filter select", () => (
  <Frame>
    <FilterSelect />
  </Frame>
));
