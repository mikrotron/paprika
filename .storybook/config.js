import React from "react";
import ReactDOM from "react-dom";
import { addParameters, addDecorator, load } from "@storybook/react";
import { load } from "@storybook/react";
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

const meFirstForms = ["/Input/", "/Select/", "/Textarea/", "/Switch/", "/DatePicker/", "/ListBox/"];
const meFirstCore = ["/Stylers/", "/L10n/"];
const meFirst = [
  "/Spinner",
  "/Button/",
  "/RawButton/",
  "/Icon/",
  "/Heading/",
  "/Popover/",
  "/SidePanel/",
  "/Sortable/",
  ...meFirstForms,
  ...meFirstCore,
];

const req = require.context("../packages", true, /\.stories\.js$/);

const stack = req.keys();
const ordered = meFirst.flatMap(comp => stack.filter(filename => filename.match(comp)));
const rest = stack.filter(filename => !ordered.includes(filename));

require("./welcome.story");
ordered.forEach(filename => req(filename));
rest.forEach(filename => req(filename));

load(req, module);
