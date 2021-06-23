/* eslint-disable no-new-wrappers */
import Token from "./Token";

export default function TokenNumber(params) {
  const token = Token(params);
  const cssUnits = ["px", "rem", "per", "unit"];
  const tokenNumber = new Number(token.default);

  // extend with token public props
  Object.assign(tokenNumber, { ...token.public });

  tokenNumber.type = "number";

  function cssUnit(value, unit) {
    if (unit === "per") return `${value / 16}%`;
    if (unit === "rem") return `${value / 16}rem`;
    if (unit === "unit") return value;
    return `${value}${unit}`;
  }

  function toCssUnits() {
    cssUnits.forEach((unit) => {
      tokenNumber[unit] = cssUnit(token.default, unit);
    });
  }

  function indexesToCssUnits() {
    [...token.bucket].forEach((scale, index) => {
      tokenNumber[index] = new Number(scale);
      cssUnits.forEach((unit) => {
        tokenNumber[index][unit] = cssUnit(scale, unit);
      });
    });
  }

  function aliasToCssUnits() {
    token.alias.forEach((short) => {
      if (typeof short === "object") {
        const key = Object.keys(short)[0];
        const value = short[key];
        tokenNumber[key] = new Number(value);
        cssUnits.forEach((unit) => {
          tokenNumber[key][unit] = cssUnit(value, unit);
        });

        return;
      }

      throw Error(
        "Alias should be an array of objects where the key is the alias name and the value prop the value for the alias"
      );
    });
  }

  tokenNumber.get = (index = 0) => {
    return tokenNumber[index];
  };

  toCssUnits();
  indexesToCssUnits();
  aliasToCssUnits();

  return tokenNumber;
}
