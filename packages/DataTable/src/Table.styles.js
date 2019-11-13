import styled, { css } from "styled-components";

export const Row = styled.div`
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #dde1e3;
  display: flex;
  width: 100%;
  ${({ $height }) => {
    return css`
      height: ${$height}px;
    `;
  }}
`;

export const Cell = styled.div`
  border-left: 1px solid #dde1e3;
  overflow: hidden;
  padding-left: 8px;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;

  &.paprika__datatable__cell--is-active {
    outline: 3px solid #2c7ff9;
  }

  ${({ $width, $height }) => {
    return css`
      ${$width ? `flex-basis: ${$width}px;` : ""}
      ${$height ? `height: ${$height}px; align-items:center; display: flex;` : ""}
    `;
  }}
`;

export const HeaderRow = styled(Row)`
  background: #f5f5f5;
  font-size: 13px;
  font-weight: bold;
`;

export const Counter = styled.div`
  align-items: center;
  color: #4d4d4d;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 13px;
  height: 100%;
  width: 60px;
`;

export const Check = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  overflow: hidden;
  padding-left: 8px;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 40px;

  span {
    diplay: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }

  input[type="checkbox"] {
    left: -2px;
    position: relative;
  }
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

  [role="button"] {
    align-items: center;
    color: #2d7ff9;
    display: flex;
    font-size: 22px;
    justify-content: center;
    opacity: 0;
  }
`;

export const Footer = styled.div`
  align-items: center;
  background: #fafafa;
  border-top: 1px solid #dde1e3;
  bottom: 0;
  /* this should improved this can be like this */
  color: #4d4d4d;
  display: flex;
  font-size: 13px;
  padding-left: 8px;
  position: fixed;
  width: 100%;

  ${({ $height }) => {
    return css`
      height: ${$height - 4}px;
    `;
  }}
`;
