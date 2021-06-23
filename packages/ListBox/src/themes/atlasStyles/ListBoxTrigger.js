const triggerSizes = {
  small(css) {
    return () => css`
      font-size: 0.9rem;
      height: 1.2rem;
      line-height: 1.2;
    `;
  },
  medium(css) {
    return () => css`
      font-size: 1rem;
      height: 1.9rem;
      line-height: 1.4;
    `;
  },
  large(css) {
    return () => css`
      font-size: 1.5rem;
      font-size: 1.6rem;
      line-height: 1.6;
    `;
  },
};

export default {
  "ListBox.Trigger": ({ css, nextCSS, ...props }) => {
    const { size } = props;
    return css`
      ${nextCSS(props)};
      ${triggerSizes[size](css)}
    `;
  },
};
