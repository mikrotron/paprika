import React from "react";
import PropTypes from "prop-types";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import NewTabIcon from "@paprika/icon/lib/NewTab";
import Button from "./Button";
import buttonStyles from "./Button.styles";

const LinkPropTypes = {
  a11yText: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  isOpenNewTab: PropTypes.bool,
  kind: PropTypes.oneOf(Button.Kinds.ALL),
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
  suffixIcon: PropTypes.node,
};

const LinkDefaultProps = {
  a11yText: null,
  isDisabled: false,
  isOpenNewTab: false,
  kind: Button.Kinds.LINK,
  size: ShirtSizes.MEDIUM,
  suffixIcon: <NewTabIcon />,
};

const isOpenNewTabProps = {
  target: "_blank",
  rel: "noopener noreferrer",
};

const LinkButton = React.forwardRef(
  ({ a11yText, children, href, isDisabled, isOpenNewTab, kind, size, suffixIcon, ...moreProps }, ref) => {
    return (
      <a
        aria-label={a11yText}
        css={buttonStyles}
        href={!isDisabled && href}
        isDisabled={isDisabled}
        kind={kind}
        size={size}
        {...(isOpenNewTab ? isOpenNewTabProps : {})}
        {...moreProps}
        as={isDisabled ? "span" : "a"}
        ref={ref}
      >
        {children}
        {kind === Button.Kinds.LINK && isOpenNewTab ? suffixIcon : null}
      </a>
    );
  }
);

LinkButton.Kinds = Button.Kinds;
LinkButton.displayName = "LinkButton";
LinkButton.propTypes = LinkPropTypes;
LinkButton.defaultProps = LinkDefaultProps;

export default LinkButton;
