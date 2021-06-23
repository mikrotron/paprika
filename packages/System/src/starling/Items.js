import TokenItem from "../TokenItem";
import * as color from "./Colors";

const { black, blue } = color;

export const textColor = TokenItem({
  name: "textColor",
  default: black,
  value: [
    { subtle: black.get(2) },
    { link: blue.get(2) },
    { linkHover: blue.get(1) },
    { icon: black.get(2) }
  ]
});

export const fontFamily = TokenItem({
  name: "fontFamily",
  default: '"Lato", "Helvetica Neue", Helvetica, Arial, sans-serif',
  value: [
    {
      jp:
        '"Lato", "Helvetica Neue", Helvetica, Arial, sans-serif, "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", "ＭＳ Ｐゴシック", "MS PGothic"'
    },
    {
      kr:
        '"Lato", "Helvetica Neue", Helvetica, Arial, sans-serif, "Malgun Gothic"'
    },
    {
      zh:
        '"Helvetica Neue", Helvetica, Arial, sans-serif, 黑體-繁, "Heiti TC", 儷黑Pro, "LiHei Pro", PMingLiu, 宋体, SimSun'
    }
  ]
});

export const placeholder = TokenItem({
  name: "placeholder",
  default: color.black.get(2),
  value: [{ color: color.black.get(2) }, { fontStyle: "italic" }]
});

export const highlight = TokenItem({
  name: "highlight",
  value: [
    { activeNoBorderBoxShadow: `0 0 0 2px ${blue.get(5)}` },
    { activeNoBorderInsetBoxShadow: `inset 0 0 0 2px ${blue.get(5)}` },
    { activeNoBorderBorderColor: blue },
    {
      activeWithBorderBoxShadow: `0 0 0 1px ${blue}, 0 0 0 3px ${blue.get(5)}`
    },
    {
      activeWithBorderInsetBoxShadow: `inset 0 0 0 1px ${blue}, inset 0 0 0 3px ${blue.get(
        5
      )}`
    },
    { activeNonInteractiveOutline: "2px dotted #8a8a8a" },
    { textGreenBackground: "#e7f3ed" },
    { textGreenFont: "#23523a" },
    { textOrangeBackground: "#fae7e3" },
    { textOrangeFont: "#932b18" },
    { textYellowBackground: "#f7f3ba" },
    { textYellowFont: "#63480c" }
  ]
});

export const border = TokenItem({
  name: "border",
  default: "no default",
  value: [
    { radius: "3px" },
    { color: "#d7d7d7" },
    { hoverColor: "#a4a4a4" },
    { colorTransition: "border-color 0.2s" }
  ]
});

export const background = TokenItem({
  name: "background",
  default: "#f7f7f7",
  value: [{ background: "#f7f7f7" }]
});
