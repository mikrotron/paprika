import TokenNumber from "../TokenNumber";

export const space = TokenNumber({
  name: "space",
  default: 8,
  value: ({ insertBetween }) => {
    const nextValue = Array(8)
      .fill(null)
      .map((_, index) => {
        return index * 8;
      });

    return insertBetween(nextValue, 1, 4);
  },
  alias: [{ sm: 4 }, { lg: 32 }]
});

export const fontSize = TokenNumber({
  name: "fontSize",
  default: 16,
  value: () => {
    return Array(14)
      .fill(null)
      .map((_, index) => {
        return Math.round(Number.parseInt(16, 10) * 1.125 ** index);
      });
  }
});

export const lineHeight = TokenNumber({
  name: "lineHeight",
  default: 1.4,
  value: () => {
    return Array(10)
      .fill(null)
      .map((_, index) => {
        return Math.round(1.4 * 1.125 ** index * 100) / 100;
      });
  }
});

export const z = TokenNumber({
  name: "z",
  default: 1,
  value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 1000]
});

export const radii = TokenNumber({
  name: "radii",
  default: 4,
  value: [2, 4, 8]
});
