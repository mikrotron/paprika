import React from "react";
import { getStoryName } from "storybook/storyTree";
import AtlasTheme from "./examples/themes/atlas";

const storyName = getStoryName("ListBox");

export default {
  title: storyName,
};

export const ThemeStory = () => <AtlasTheme />;

ThemeStory.story = {
  name: "AtlasTheme",
};
