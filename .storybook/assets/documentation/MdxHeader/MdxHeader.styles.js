import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const mdxHeaderStyles = `
  .mdx-header__meta {
    display: flex;
    align-items: baseline;    

    .mdx-header__description {
      width: 75%;
    }

    .mdx-header__quick-stuffs {
      text-align: right;
      flex-grow: 1;
    }

    > div {
      padding-bottom: 8px;
    }
  }
`;

export default mdxHeaderStyles;
