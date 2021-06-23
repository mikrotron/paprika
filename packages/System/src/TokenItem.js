/* eslint-disable no-new-wrappers */
import Token from "./Token";

export default function TokenItem(params) {
  const token = Token(params);
  const tokenItem = new String(
    typeof token.default === "undefined" ? "" : token.default
  );
  // extend with token public props
  Object.assign(tokenItem, { ...token.public });

  function toIndexesValues() {
    [...token.bucket].forEach((entry) => {
      if (typeof entry === "object") {
        const key = Object.keys(entry)[0];
        const nextToken = entry[key];

        tokenItem[key] = nextToken;
        return;
      }

      throw Error(
        "value should be an array of objects where the key is the name of the property and the value prop the value for the token"
      );
    });
  }

  toIndexesValues();

  return tokenItem;
}
