import React from "react";
import { ThemeProvider } from "styled-components";

import ListBox from "../../../src";
import * as characters from "../../fixtures/characters";
// import atlas from "../../../src/themes/atlas";

export default function AtlasTheme() {
  return (
    <ThemeProvider
      theme={{
        "ListBox.Divider": ({ css, nextCSS, ...props }) => {
          return css`
            border: 1px solid red;
          `;
        },
      }}
    >
      <ListBox isMulti isOpen>
        <ListBox.Divider>Hi!</ListBox.Divider>
        {characters.antiHeroesRaw.map(item => {
          return (
            <ListBox.Option key={item.label} label={item.label}>
              {({ isSelected }) => (
                <div style={{ display: "inline-flex", alignItems: "center" }}>
                  <div>
                    <input defaultChecked={isSelected} type="checkbox" />
                  </div>
                  <div>{item.label}</div>
                </div>
              )}
            </ListBox.Option>
          );
        })}
      </ListBox>
    </ThemeProvider>
  );
}
