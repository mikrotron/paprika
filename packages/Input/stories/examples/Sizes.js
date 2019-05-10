import React from "react";
import Button from "@paprika/button";
import Heading from "@paprika/heading";
import { Rule, Gap, Small, Large, Subtle } from "storybook/assets/styles/common.styles";
import { InputStory } from "../Input.stories.styles";
import InputExample from "./InputExample";

const SizesExampleStory = () => {
  return (
    <InputStory>
      <Heading level={1} displayLevel={3}>
        Hack Sizes
      </Heading>
      <Rule />
      <Heading level={2} displayLevel={4}>
        <code>size = small</code>
      </Heading>
      <InputExample placeholder="First Name" size="small" />
      <Button size="small">Action</Button>
      <Small>Yatta!</Small>
      <Gap />
      <Heading level={2} displayLevel={4}>
        <code>size = medium</code>
        <Subtle>&nbsp;&nbsp;(default)</Subtle>
      </Heading>
      <InputExample placeholder="First Name" />
      <Button>Action</Button>
      Yatta!
      <Gap />
      <Heading level={2} displayLevel={4}>
        <code>size = large</code>
      </Heading>
      <InputExample placeholder="First Name" size="large" />
      <Button size="large">Action</Button>
      <Large>Yatta!</Large>
    </InputStory>
  );
};

export default SizesExampleStory;
