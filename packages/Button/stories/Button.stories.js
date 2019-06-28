import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Showcase from "./examples/Showcase";
import Basic from "./examples/Basic";
import NewRef from "./examples/NewRef";
import OldRef from "./examples/OldRef";
import CloseButtonRef from "./examples/CloseButtonRef";
import mdx from "./Button.stories.mdx";

import Button from "../src";

const docs = mdx && mdx.parameters && mdx.parameters.docs;

storiesOf(" | Button", module)
  .addParameters({ docs, component: Button })
  .addDecorator(withKnobs)
  .add("Showcase", Showcase)
  .add("Variations", () => <Basic />);

storiesOf(" | Button / Dev", module)
  .add("Ref", () => <NewRef />)
  .add("Old Ref", () => <OldRef />)
  .add("Button.Close Ref", () => <CloseButtonRef />);
