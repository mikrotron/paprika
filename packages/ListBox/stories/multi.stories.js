import React from "react";
import { storiesOf } from "@storybook/react";
import * as Multi from "./examples/multi";

storiesOf("Forms | ListBox / multi", module)
  .add("Basic", () => <Multi.Basic />)
  .add("Basic with preselected options", () => <Multi.BasicWithPreselectedOptions />)
  .add("Basic is disabled", () => <Multi.BasicIsDisabled />)
  .add("Basic is disabled while open", () => <Multi.BasicIsDisabledWhileOpen />)
  .add("With Custom Checkboxes", () => <Multi.WithCustomCheckboxes />)
  .add("Footer", () => <Multi.Footer />)
  .add("With Groups", () => <Multi.WithGroups />)
  .add("With Filter", () => <Multi.WithFilter />)
  .add("With Groups and have preselected options", () => <Multi.WithGroupsAndHavePreselectedOptions />);
