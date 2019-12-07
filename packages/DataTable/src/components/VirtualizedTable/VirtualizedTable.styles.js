/* This will likely change color and tokens, I will wait until the UI mockup exists */
import styled from "styled-components";

export const Row = styled.div.attrs(({ $height, isHeaderRow = false, hideLeftColumn = false }) => {
  const style = {};

  if ($height) {
    style.height = isHeaderRow ? "32px" : `${$height}px`;
  }

  style.borderBottom = "1px solid red";
  if (hideLeftColumn) {
    style.borderBottom = "1px solid transparent";
  }

  return {
    style,
  };
})`
  width: 100%;
  align-items: center;
  background: #fff;
  display: flex;
`;

export const InnerCell = styled.div`
  align-items: center;
  color: #4d4d4d;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  padding: 4px;
`;

export const Expand = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-items: center;
  width: 20px;

  &:hover [role="button"] {
    opacity: 1;
  }

  /* Ignore this will be replace with an svg icon */
  [role="button"] {
    align-items: center;
    color: #2d7ff9;
    display: flex;
    font-size: 22px;
    justify-content: center;
    opacity: 0;
  }
  /* Ignore this will be replace with an svg icon */
`;
