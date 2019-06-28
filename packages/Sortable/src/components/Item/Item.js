/* eslint-disable react/no-unused-prop-types */

import React from "react";
import PropTypes from "prop-types";

const Item = ({ children }) => <React.Fragment>{children}</React.Fragment>;

Item.displayName = "Sortable.Item";

Item.propTypes = {
  /** Content node for list item. */
  children: PropTypes.node.isRequired,

  /** Unique, static ID for each item. */
  sortId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Item;
