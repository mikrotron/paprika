import styled from "styled-components";
import Button from "@paprika/button";
import tokens from "@paprika/tokens";
import Sortable from "@paprika/sortable";
import { spacer } from "@paprika/stylers/lib/helpers";

export const Field = styled(Sortable.Item)``;

export const RowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  [data-pka-anchor="filter.item.valueInput--date"] {
    flex-basis: 100%;
    margin-top: ${tokens.spaceLg};
  }
`;

export const ColumnSelect = styled.div`
  height: ${spacer(4)};
  margin-right: ${tokens.spaceLg};
  width: calc(50% - 6px);

  @media (max-width: 1200px) {
    flex-basis: 100%;
    margin-bottom: ${tokens.space};
    margin-right: 0;
    width: auto;
  }
`;

export const RuleSelect = styled.div`
  align-items: center;
  display: flex;
  height: ${spacer(4)};
  width: calc(50% - 6px);

  @media (max-width: 1200px) {
    flex-basis: 100%;
    width: auto;
  }
`;

export const ValueInput = styled.div`
  flex-basis: 100%;
  height: ${spacer(4)};
  margin-top: ${tokens.spaceLg};
`;
