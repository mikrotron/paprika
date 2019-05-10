import styled from "styled-components";
import tokens from "@paprika/tokens";
// import stylers from "@paprika/stylers";
import { Story } from "storybook/assets/styles/common.styles";

// Common Input story styles

export const InputStory = styled(Story)`
  .form-input {
    display: inline-block;
  }

  button {
    vertical-align: top;
    margin: 0 ${tokens.spaceSm};
  }
`;
