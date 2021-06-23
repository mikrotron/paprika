import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import { theme } from "@paprika/themes";

const placeholderStyles = ({ isDisabled }) => css`
  ${stylers.placeholder};
  ${isDisabled && `color: ${tokens.color.blackLighten60}`}
`;

export const labelStyles = css`
  display: inline-block;
  overflow: hidden;
  padding-right: 48px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

export const Label = styled.span(
  theme(
    "ListBox.Label",
    ({ isPlaceholder, hasImplicitAll }) => css`
      ${isPlaceholder && !hasImplicitAll ? placeholderStyles : ""}
    `
  )
);
