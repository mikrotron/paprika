import styled from "styled-components";
import stylers from "@paprika/stylers";

// constants for this component (and subcomponents)
export const consts = {
  transition: "150ms",
};

// styling for main <Popover> component
const PopoverStyled = styled.div`
  ${stylers.inlineBlockStyle};
`;

export default PopoverStyled;
