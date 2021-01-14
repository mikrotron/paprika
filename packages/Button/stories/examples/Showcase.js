import React from "react";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import Button from "../../src";

function Showcase(props) {
  return (
    <Story>
      <Heading level={1} displayLevel={2} isLight>
        Showcase
      </Heading>
      <Tagline>Use the knobs to tinker with the props.</Tagline>
      <Rule />
      <Button {...props} />
    </Story>
  );
}

export const ShowcaseStory = args => <Showcase {...args} />;

ShowcaseStory.args = {
  children: "Give now",
};
