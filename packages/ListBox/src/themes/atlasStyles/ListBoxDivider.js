export default {
  "ListBox.Divider": ({ css, nextCSS, ...props }) => {
    return css`
      ${nextCSS(props)};
    `;
  },
};
