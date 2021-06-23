import styled, { css } from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import { theme } from "@paprika/themes";

export const NoResults = styled.div(
  theme(
    "ListBox.NoResults",
    () => css`
      margin-top: -${tokens.spaceSm};
      padding: ${tokens.space};
    `
  )
);

export const NoResultsAria = styled.div(
  theme(
    "ListBox.NoResultsAria",
    () => css`
      ${stylers.visuallyHidden}
    `
  )
);
