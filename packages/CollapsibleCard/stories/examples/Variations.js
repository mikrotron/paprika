import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { Story } from "storybook/assets/styles/common.styles";

import CollapsibleCard from "../../src";

const ExampleStory = () => {
  return (
    <Story>
      <StoryHeading level={1}>Collapsible card variations</StoryHeading>
      <CollapsibleCard label="Avatar, metadata with label">
        <CollapsibleCard.Avatar>Concur</CollapsibleCard.Avatar>
        <CollapsibleCard.Metadata>1000 records</CollapsibleCard.Metadata>
        <CollapsibleCard.Content>Content</CollapsibleCard.Content>
      </CollapsibleCard>
      <br />
      <CollapsibleCard label="Avatar, metadata with long long long long long long long long long long long long long long long long long long long long long long long long label">
        <CollapsibleCard.Avatar>Concur</CollapsibleCard.Avatar>
        <CollapsibleCard.Metadata>1000 records</CollapsibleCard.Metadata>
        <CollapsibleCard.Content>Content</CollapsibleCard.Content>
      </CollapsibleCard>
      <br />
      <CollapsibleCard label="Metadata with label">
        <CollapsibleCard.Metadata>1000 records</CollapsibleCard.Metadata>
        <CollapsibleCard.Content>Content</CollapsibleCard.Content>
      </CollapsibleCard>
      <br />
      <CollapsibleCard label="Avatar with label">
        <CollapsibleCard.Avatar>Concur</CollapsibleCard.Avatar>
        <CollapsibleCard.Content>Content</CollapsibleCard.Content>
      </CollapsibleCard>
      <br />
      <CollapsibleCard label="Label only">
        <CollapsibleCard.Content>Content</CollapsibleCard.Content>
      </CollapsibleCard>
      <br />
      <CollapsibleCard label="Label only with divider">
        <CollapsibleCard.Content hasDivider>Content</CollapsibleCard.Content>
      </CollapsibleCard>
    </Story>
  );
};

export default ExampleStory;
