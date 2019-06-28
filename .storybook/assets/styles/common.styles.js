import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

// Common Storybook story styles

export const Story = styled.div`
  padding: ${stylers.spacer(3)};

  h1 {
    margin-top: 0;
  }
`;

export const MDXStory = styled.div`
  h1 {
    font-weight: normal !important;
    margin-top: 0 !important;
  }

  table {
    margin-top: 0 !important;
  }

  th:empty {
    visibility: hidden;
  }

  hr {
    border: none;
    border-bottom: 1px solid ${tokens.border.color} !important;
    margin: ${stylers.spacer(4)} 0 !important;
  }

  [data-simplebar] {
    font-weight: bold;
  }
`;

export const CenteredStory = styled.div`
  ${stylers.alignMiddle}
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

export const Rule = styled.hr`
  border: none;
  border-bottom: 1px solid ${tokens.border.color};
  margin: ${stylers.spacer(4)} 0;
`;

export const Small = styled.small`
  color: ${tokens.color.blackLighten40};
`;

export const Tagline = styled.div`
  color: ${tokens.textColor.subtle};
  font-style: italic;
`;

export const Gap = styled.div`
  height: 120px;
`;
