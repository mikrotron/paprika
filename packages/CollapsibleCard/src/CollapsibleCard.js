import React from "react";
import PropTypes from "prop-types";
import Body from "./components/Body";
import Header from "./components/Header";
import Segment from "./components/Segment";
import CollapsibleCardContext from "./CollapsibleCardContext";
import * as sc from "./CollapsibleCard.styles";

// - hover style (designers only want it to affect the header when it is expanded...)
// - focus style (designers want the entire header to go blue, but the entire thing is not clickable (see above)...)
// - Cards.Group
// - a11y, focus, see Collapsible and old CollapsibleCard
// - create all docs/readmes, see paprikaDocs in package.json
// - tests
// TODO later: clicking on buttons in the header was propagating, so i discussed with nahum and decided to make just the arrow clickable and discuss later

export default function CollapsibleCard(props) {
  const { children, initialIsCollapsed, isEditing, onToggleIsCollapsed } = props;
  const [isCollapsed, setIsCollapsed] = React.useState(initialIsCollapsed);

  function handleToggleIsCollapsed() {
    onToggleIsCollapsed(!isCollapsed);
    setIsCollapsed(oldIsCollapsed => !oldIsCollapsed);
  }

  const thingsToShare = { isCollapsed, handleToggleIsCollapsed, onToggleIsCollapsed };

  return (
    <CollapsibleCardContext.Provider value={thingsToShare}>
      <sc.CollapsibleCard isEditing={isEditing}>{children}</sc.CollapsibleCard>
    </CollapsibleCardContext.Provider>
  );
}

const propTypes = {
  children: PropTypes.node,
  initialIsCollapsed: PropTypes.bool,
  isEditing: PropTypes.bool,
  onToggleIsCollapsed: PropTypes.func,
};

const defaultProps = {
  children: null,
  initialIsCollapsed: true,
  isEditing: false,
  onToggleIsCollapsed: () => {},
};

CollapsibleCard.propTypes = propTypes;
CollapsibleCard.defaultProps = defaultProps;

CollapsibleCard.Body = Body;
CollapsibleCard.Header = Header;
CollapsibleCard.Segment = Segment;
