import { css } from "styled-components";
import { toInt, fontSizeValue, lineHeightValue, z } from "@paprika/stylers/lib/helpers";
import { boxSizingStyles, visuallyHidden } from "@paprika/stylers/lib/includes";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import tokens from "@paprika/tokens";

const getLabelLeftPadding = (radioSize, hasLabel) => {
  return hasLabel ? `${toInt(radioSize) + toInt(tokens.space)}px` : radioSize;
};

const smallRadioSize = tokens.radio.sizeSm;
const mediumRadioSize = tokens.radio.sizeMd;
const largeRadioSize = tokens.radio.sizeLg;

const getHalfSizeCss = sizeCss => `${toInt(sizeCss) / 2}px`;
const smallRadioHalfSize = getHalfSizeCss(smallRadioSize);
const mediumRadioHalfSize = getHalfSizeCss(mediumRadioSize);
const largeRadioHalfSize = getHalfSizeCss(largeRadioSize);

const styles = {
  [ShirtSizes.SMALL]: {
    baseFontSize: {
      fontSize: `${fontSizeValue(-1)}px`,
    },
    radioStyles: {
      height: smallRadioSize,
      width: smallRadioSize,
      borderRadius: smallRadioHalfSize,
    },
    radioIconBackgroundStyles: {
      borderRadius: "4px",
      height: "8px",
      top: "4px",
      width: "8px",
    },
    radioIconStyles: {
      fontSize: `${fontSizeValue(-4)}px`,
      height: smallRadioSize,
      left: smallRadioHalfSize,
    },
    labelStyles: hasLabel => {
      return {
        minHeight: smallRadioSize,
        padding: `0 0 0 ${getLabelLeftPadding(smallRadioSize, hasLabel)}`,
      };
    },
  },
  [ShirtSizes.MEDIUM]: {
    baseFontSize: {
      fontSize: `${fontSizeValue()}px`,
    },
    radioStyles: {
      height: mediumRadioSize,
      width: mediumRadioSize,
      borderRadius: mediumRadioHalfSize,
    },
    radioIconBackgroundStyles: {
      borderRadius: "6px",
      height: "10px",
      top: "5px",
      width: "10px",
    },
    radioIconStyles: {
      fontSize: `${fontSizeValue(-2)}px`,
      height: mediumRadioSize,
      left: mediumRadioHalfSize,
    },
    labelStyles: hasLabel => {
      return {
        minHeight: mediumRadioSize,
        padding: `1px 0 0 ${getLabelLeftPadding(mediumRadioSize, hasLabel)}`,
      };
    },
  },
  [ShirtSizes.LARGE]: {
    baseFontSize: {
      fontSize: `${fontSizeValue()}px`,
    },
    radioStyles: {
      height: largeRadioSize,
      width: largeRadioSize,
      borderRadius: largeRadioHalfSize,
    },
    radioIconBackgroundStyles: {
      borderRadius: "6px",
      height: "12px",
      top: "6px",
      width: "12px",
    },
    radioIconStyles: {
      fontSize: `${fontSizeValue()}px`,
      height: largeRadioSize,
      left: largeRadioHalfSize,
    },
    labelStyles: hasLabel => {
      return {
        minHeight: largeRadioSize,
        padding: `3px 0 0 ${getLabelLeftPadding(largeRadioSize, hasLabel)}`,
      };
    },
  },
};

export const radioStyles = css`
  ${boxSizingStyles};
  ${({ size }) => styles[size].baseFontSize};
  line-height: ${({ hasLabel }) => (hasLabel ? lineHeightValue(-1) : "0")};
  margin: ${tokens.space} 0;
  position: relative;

  input[type="radio"] {
    ${visuallyHidden};

    &:focus + label::before {
      box-shadow: ${tokens.highlight.active.noBorder.boxShadow};
      border-color: ${tokens.highlight.active.noBorder.borderColor};
    }

    & + label {
      cursor: pointer;
      display: inline-block;
      margin: 0;
      ${({ size, hasLabel }) => styles[size].labelStyles(hasLabel)};
      position: relative;
    }

    & + label::before {
      background: ${tokens.color.white};
      border: 2px solid ${tokens.border.color};
      content: "";
      left: 0;
      position: absolute;
      top: 0;
      ${z(1)};
      ${({ size }) => styles[size].radioStyles};
    }

    & + label:hover::before {
      border: 2px solid ${tokens.color.black};
    }

    &:checked {
      & + label.deselectable:hover:before {
        background: ${tokens.color.blackLighten60};
      }
      & + label::before {
        border: 2px solid ${tokens.color.black};
      }
    }

    &:checked + label > [data-pka-anchor="radio.icon.check"] {
      opacity: 1;
    }

    &:disabled {
      & + label,
      &:checked {
        & + label:hover::before {
          border: 2px solid ${tokens.color.black};
        }
        & + label.deselectable:hover:before {
          background-color: inherit;
        }
      }
      & + label:hover::before {
        border: 2px solid ${tokens.color.blackLighten60};
      }
    }
  }
`;

export const radioIconStyles = css`
  color: ${tokens.color.black};
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  transform: translateX(-50%);
  transition: opacity 0.15s ease-out;
  ${({ size }) => styles[size].radioIconStyles};
  ${z(2)};

  /* ${({ isChecked }) => {
    if (isChecked) {
      return {
        opacity: 1,
      };
    }
  }} */

  ${({ isDisabled }) => {
    if (isDisabled) {
      return {
        cursor: "not-allowed",
        opacity: 0.5,
        transition: "none",
      };
    }
  }}

  ${({ isSolidBackground, size }) => {
    if (isSolidBackground) {
      return {
        backgroundColor: `${tokens.color.black}`,
        ...styles[size].radioIconBackgroundStyles,
      };
    }
  }}
`;
