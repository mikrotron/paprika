import styled, { css } from "styled-components";
import Input from "@paprika/input";
import tokens from "@paprika/tokens";
import { theme } from "@paprika/themes";

export const Filter = styled.div(
  theme(
    "ListBox.Filter",
    () => css`
      padding: ${tokens.space};
      position: relative;
    `
  )
);

export const FilterInput = styled(Input)(
  theme(
    "ListBox.Filter.Input",
    () => css`
      && {
        background-color: ${tokens.color.white};
      }
    `
  )
);
