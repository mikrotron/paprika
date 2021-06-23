import styled, { css } from "styled-components";
import Popover from "@paprika/popover";
import { theme } from "@paprika/themes";

export const PopoverWrapper = styled(Popover)(
  theme(
    "ListBox.PopoverWrapper",
    () => css`
      display: inline-block;
      width: 100%;
    `
  )
);
