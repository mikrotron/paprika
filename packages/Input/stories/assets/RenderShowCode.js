import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { boolean } from "@storybook/addon-knobs";

const RenderShowCode = props => {
  const { children } = props;

  const el = children;
  console.log(children);

  const elName = el.type.displayName;
  const keys = Object.keys(el.props);

  const elProps = keys.map(key => {
    return `${key}="${el.props[key]}"`;
  });

  const tab = "  ";

  const codeString = `<${elName}\n${tab}${elProps.map(prop => `${prop}\n`).join(tab)}></${elName}>`;

  return (
    <div>
      <div>{el}</div>
      <div style={{ display: boolean("SHOW CODE", false) ? "block" : "none" }}>
        <SyntaxHighlighter language="javascript">{codeString}</SyntaxHighlighter>
      </div>
    </div>
  );
};

export default RenderShowCode;
