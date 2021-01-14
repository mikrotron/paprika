import { getStoryName } from "storybook/storyTree";
import { showcaseStoryParameters, variationsStoryParameters } from "storybook/assets/storyParameters";
import { ShowcaseStory } from "./examples/Showcase";
import Variations from "./variations/Variations";
import Button from "../src";

const storyName = getStoryName("Button");

export default {
  title: storyName,
  component: Button,
};

export const showcase = ShowcaseStory;
showcase.story = {
  name: "Showcase",
  argTypes: {
    children: { control: "text" },
    kind: { control: "select" },
  },
  parameters: showcaseStoryParameters,
};

export const variations = Variations;
variations.story = {
  name: "Variations",
  parameters: variationsStoryParameters,
};
