import React from "react";
import { storiesOf, addParameters } from "@storybook/react";
import { WelcomePage, WelcomeBody, Heading1, Heading2, Bar } from "./welcome.story.styles";
import readme from "../README.md";
import mdx from "./welcome.stories.mdx";

const docs = mdx && mdx.parameters && mdx.parameters.docs;

storiesOf(" | Welcome", module)
  .addParameters({ docs, options: { showPanel: false } })
  .add(
    "Paprika",
    () => (
      <WelcomePage>
        <WelcomeBody>
          <Heading1>Paprika</Heading1>
          <Heading2>
            Robust <Bar>|</Bar> Accessible <Bar>|</Bar> Clear <Bar>|</Bar> Delightful
          </Heading2>
        </WelcomeBody>
      </WelcomePage>
    ),
    { notes: readme }
  );
