export default {
  "ListBox.Box": ({ css, nextCSS, ...props }) => {
    return css`
      ${nextCSS(props)};
    `;
  },
};
