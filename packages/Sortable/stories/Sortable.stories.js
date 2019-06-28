import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withPropsTable } from "storybook-addon-react-docgen";
import { Story } from "storybook/assets/styles/common.styles";
import * as helpers from "./Sortable.stories.helpers";

import Showcase from "./examples/Showcase";
import Sortable from "./examples/Functional";
// import BasicExample from "./examples/Basic";
// import ServerErrorExample from "./examples/ServerError";
import ScreenerExample from "./examples/Screener";

import doc from "./Sortable.stories.mdx";
import readme from "../README.md";
import changelog from "../CHANGELOG.md";

const docs = doc && doc.parameters && doc.parameters.docs;
const notes = { readme, changelog };
const props = { propTables: [Sortable] };

storiesOf(" | Sortable", module)
  .addDecorator(withKnobs)
  .addDecorator(withPropsTable)
  .add("Showcase", Showcase, { notes, docs, props });

// storiesOf(" | Sortable/Examples", module)
//   .add("Basic", () => <BasicExample />)
//   .addDecorator(withPropsTable)

//   .add("Functional", () => (
//     <Story css={helpers.storyStyles}>
//       <Sortable>{helpers.basicChildren(8)}</Sortable>
//     </Story>
//   ))
//   .add("Fake Server Error", () => <ServerErrorExample />);

storiesOf(" | Sortable/Tests", module)
  .add("Screener", () => <ScreenerExample />)
  .add("Cypress", () => (
    <Story css={helpers.storyStyles}>
      <Sortable>{helpers.inputChildren(4)}</Sortable>
    </Story>
  ));
