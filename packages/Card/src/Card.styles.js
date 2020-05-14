import { css } from "styled-components";
import tokens from "@paprika/tokens";

const cardStyles = css`
  background: ${tokens.color.white};
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  box-shadow: 0.3px 0.3px 0.3px 0.3px #d7d7d7;
  min-height: 60px;
  min-width: 200px;
`;

export default cardStyles;
