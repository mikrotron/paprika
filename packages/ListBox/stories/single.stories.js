import React from "react";
import { storiesOf } from "@storybook/react";
import * as Single from "./examples/single";

storiesOf("Forms | ListBox / single", module)
  .add("Basic", () => <Single.Basic />)
  .add("Basic Inline Display", () => <Single.BasicInlineDisplay />)
  .add("Basic Dividers", () => <Single.Dividers />)
  .add("Basic is disabled", () => <Single.BasicIsDisabled />)
  .add("Basic is inline disable", () => <Single.BasicIsInlineDisable />)
  .add("Basic option disabled", () => <Single.BasicOptionDisabled />)
  .add("Basic with empty option", () => <Single.BasicWithEmptyOption />)
  .add("Basic with preselected option", () => <Single.BasicPreselectedOption />)
  .add("Custom Children", () => <Single.CustomChildrenInline />)
  .add("Custom z-index", () => <Single.WithCustomZIndex />)
  .add("Footer", () => <Single.Footer />)
  .add("Has no clear button", () => <Single.HasNoClearButton />)
  .add("Has prevent default on select", () => <Single.WithPreventDefaultOnSelect />)
  .add("Has scroll connected to element", () => <Single.WithContainerScroll />);
