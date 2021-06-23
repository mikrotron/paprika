export default {
  "ListBox.List": ({ css, nextCSS, ...props }) => {
    return css`
      ${nextCSS(props)};
      padding: 0;
    `;
  },
};
