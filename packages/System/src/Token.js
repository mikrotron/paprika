/* eslint-disable no-use-before-define */
export default function Token({
  name,
  default: main = "",
  value,
  alias = []
} = {}) {
  if (typeof name === "undefined") {
    throw Error("you need to declare the type of the token");
  }

  if (typeof main === "undefined" || main === null) {
    throw Error(
      "please define a main which will work as the default value of the token"
    );
  }

  const bucket = add(value);

  return {
    default: main,
    value,
    alias,
    bucket,
    public: {
      name,
      isSystemToken: true,
      entries() {
        return [...bucket].map((value) => {
          return value;
        });
      },
      size() {
        return bucket.size;
      },
      alias: [...alias]
    }
  };
}

function insertBetween(array, index, ...newItems) {
  return [...array.slice(0, index), ...newItems, ...array.slice(index)];
}

function add(value) {
  let bucket = new Set([]);

  if (typeof value === "function") {
    const result = value({ insertBetween });
    if (Array.isArray(result)) {
      bucket = new Set(result);
      return bucket;
    }

    throw Error("Value must be an array or an function returning an array");
  }

  if (Array.isArray(value)) {
    bucket = new Set(value);
    return bucket;
  }

  throw Error("Value must be an array or an function returning an array");
}