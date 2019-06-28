import React from "react";
import ReactDOM from "react-dom";
import { load } from "@storybook/react";
import { addParameters, configure, addDecorator } from "@storybook/react";
import paprikaTheme from "./paprikaTheme";
import { withA11y } from "@storybook/addon-a11y";

addDecorator(withA11y);

import "./reset.scss";

addParameters({
  options: {
    theme: paprikaTheme,
    isToolshown: true,
    showNav: true,
    showPanel: true,
  },
});

const meFirst = ["/Button/", "/RawButton/", "/Popover/", "/Stylers/"];

load(require.context("../packages", true, /\.stories\.mdx$/), module);
const req = require.context("../packages", true, /\.stories\.js$/);

const stack = req.keys();

const ordered = meFirst.flatMap(comp => stack.filter(filename => filename.match(comp)));
const rest = stack.filter(filename => !ordered.includes(filename));

require("./welcome.story");

configure(() => {
  ordered.forEach(filename => req(filename));
  rest.forEach(filename => req(filename));
}, module);
