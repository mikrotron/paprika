export default {
  "ListBox.Option": ({ css, nextCSS, ...props }) => {
    const { isSelected } = props;
    return css`
      ${nextCSS(props)};
      ${isSelected ? `background: #EBEEF2; border-bottom: 1px solid #DDE2E7` : ""}
      border-radius: 0;
      margin: 0;
      padding: 10px 8px;
      &: focus {
        border-bottom-color: transparent;
        border-radius: 0;
        box-shadow: inset 0 0 0 3px #a5cced;
        outline: none;
      }
    `;
  },
};
