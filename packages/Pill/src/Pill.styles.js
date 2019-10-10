import { css } from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

const pillColorStyles = {
  black: css`
    background: ${tokens.color.black};
  `,

  blue: css`
    background: ${tokens.color.blue};
  `,

  grey: css`
    background: ${tokens.color.blackLighten60};
    color: ${tokens.color.black};
  `,

  green: css`
    background: ${tokens.color.greenDarken10};
  `,

  orange: css`
    background: ${tokens.color.orangeDarken10};
  `,

  noRisk: css`
    background: ${tokens.color.blackLighten60};
    color: ${tokens.color.black};
  `,

  lowRisk: css`
    background: #299a7a;
  `,

  mediumRisk: css`
    background: #c9af28;
  `,

  highRisk: css`
    background: #cd3c44;
  `,
};

const pillSizeStyles = {
  small: css`
    border-radius: ${tokens.pill.smallRadius};
    font-weight: bold;
    line-height: ${stylers.spacer(2)};
    padding: 0 ${tokens.space};
    ${stylers.fontSize(-3)};

    .aclui-icon::before {
      ${stylers.fontSize(-3)};
    }
  `,
  medium: css`
    border-radius: ${tokens.pill.mediumRadius};
    line-height: ${stylers.spacer(3)};
    padding: 0 ${stylers.spacer(4)};
    ${stylers.fontSize(-1)};
  `,
};

const pillStyles = css`
  align-items: center;
  color: ${tokens.color.white};
  display: inline-flex;

  &,
  * {
    box-sizing: border-box;
  }

  &:focus {
    outline: 0;
  }

  svg {
    margin-right: ${tokens.spaceSm};
  }

  ${({ size }) => pillSizeStyles[size]}
  ${({ pillColor }) => pillColorStyles[pillColor]}
`;

export default pillStyles;
