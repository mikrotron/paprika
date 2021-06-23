export default {
  "ListBox.Label": ({ css, nextCSS, ...props }) => {
    return css`
      ${nextCSS(props)};
      padding: 32px 8px;
    `;
  },
};
