import React from "react";
import ReactDOM from "react-dom";
import { addParameters, addDecorator, configure } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import paprikaTheme from "./paprikaTheme";
import "./reset.scss";

addParameters({
  options: {
    theme: paprikaTheme,
    showPanel: true,
    panelPosition: "right",
  },
});

addDecorator(withA11y);

const stories = [
  // Welcome
  require.context("./", false, /welcome.story.js/),

  // CollapsibleText
  require.context("../packages/CollapsibleText", true, /CollapsibleText.stories.(js|mdx)$/),
  require.context("../packages/CollapsibleText", true, /CollapsibleText.Tests.stories.js$/),

  // DialogActions
  require.context("../packages/DialogActions", true, /DialogActions.stories.(js|mdx)$/),
  require.context("../packages/DialogActions", true, /DialogActions.Tests.stories.js$/),

  // Toast
  require.context("../packages/Toast", true, /Toast.stories.(js|mdx)$/),
  require.context("../packages/Toast", true, /Toast.examples.stories.(js|mdx)$/),
  require.context("../packages/Toast", true, /Toast.backyard.stories.(js|mdx)$/),
  require.context("../packages/Toast", true, /Toast.Tests.stories.(js|mdx)$/),

  // Remaining
  require.context("../packages", true, /\.stories\.(js|mdx)$/),
];

configure(stories, module);
