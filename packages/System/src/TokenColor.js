/* eslint-disable no-new-wrappers */
import Token from "./Token";

function alpha(alpha = 100, nextColor = null) {
  const color = nextColor !== null ? nextColor : this.toString();

  // there are tokenColors without a default value
  if (color === "") return;

  if (color.includes("#")) {
    const hexAlpha = Math.ceil((alpha / 100) * 255).toString(16);
    return `${color}${hexAlpha}`;
  }

  throw Error(`color ${color} expects to be hexadecimal with leading #`);
}

function alphaBlack(per) {
  return alpha(per, "#000000");
}

function alphaWhite(per) {
  return alpha(per, "#FFFFFF");
}

export default function TokenColor(params) {
  const token = Token(params);
  const tokenColor = new String(token.default);
  // extend with token public props
  Object.assign(tokenColor, { ...token.public });
  tokenColor.type = "color";

  function indexesToColors() {
    [...token.bucket].forEach((color, index) => {
      tokenColor[`$${index}`] = new String(color);
      tokenColor[`$${index}`].alpha = alpha.bind(tokenColor[`$${index}`]);
    });
  }

  function aliasToColors() {
    token.alias.forEach((short) => {
      if (typeof short === "object") {
        const key = Object.keys(short)[0];
        const color = short[key];
        tokenColor[key] = new String(color);
        tokenColor[key].alpha = alpha.bind(tokenColor[key]);
        return;
      }

      throw Error(
        "Alias should be an array of objects where the key is the alias name and the value prop the value for the alias"
      );
    });
  }

  tokenColor.alpha = alpha.bind(tokenColor);
  tokenColor.alphaBlack = alphaBlack.bind(tokenColor);
  tokenColor.alphaWhite = alphaWhite.bind(tokenColor);

  tokenColor.get = (index = 0) => {
    return tokenColor[`$${index}`];
  };

  tokenColor.last = () => {
    return tokenColor.get([token.public.size() - 1]);
  };

  indexesToColors();
  aliasToColors();

  return tokenColor;
}
