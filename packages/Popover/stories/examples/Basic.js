import React from "react";
import { text, number, select } from "@storybook/addon-knobs";
import styled from "styled-components";
import { CenteredStory } from "storybook/assets/styles/common.styles";
import Button from "@paprika/button";
import Popover from "../../src";

const Gap = styled.div`
  display: inline-block;
  width: 100px;
`;

const sampleText = {
  short: "Lorem Hipsum",
  long: `Lorem ipsum lumbersexual hot chicken austin readymade messenger bag aesthetic meh twee you probably havent
    heard of them 3 wolf moon listicle. Normcore ramps gastropub fanny pack pabst. Hashtag roof party pour-over food
    truck, crucifix try-hard godard biodiesel next level snackwave disrupt flexitarian.`,
};

export const basicProps = () => ({
  align: select("align", ["bottom", "top", "right", "left"], "bottom"),
  maxWidth: text("maxWidth", "320"),
  offset: number("offset", 12),
});

const ExampleStory = props => (
  <CenteredStory>
    <Popover {...props}>
      <Popover.Trigger>
        <Button>Open Popover</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Tip />
        <Popover.Card>{sampleText.long}</Popover.Card>
      </Popover.Content>
    </Popover>

    <Gap />

    <Popover {...props} isDark isEager>
      <Popover.Trigger>
        <Button kind="minor">Open Tooltip</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Tip />
        <Popover.Card>{sampleText.short}</Popover.Card>
      </Popover.Content>
    </Popover>
  </CenteredStory>
);

export default ExampleStory;
