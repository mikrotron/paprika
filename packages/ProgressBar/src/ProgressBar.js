import React from "react";
import PropTypes from "prop-types";

import Heading from "@paprika/heading";
import * as sc from "./ProgressBar.styles";

const propTypes = {
  /** Descriptive a11y text for assistive technologies. By default, text from children node will be used. */
  a11yText: PropTypes.string,
  /** Body text for the ProgressBar */
  bodyText: PropTypes.string,
  /** Header text for the ProgressBar */
  header: PropTypes.string,
  /** Specifies how much progress has been completed */
  completed: PropTypes.number,
};

const defaultProps = {
  a11yText: null,
  bodyText: null,
  header: null,
  completed: 0,
};

function ProgressBar(props) {
  const { a11yText, header, bodyText, completed, ...moreProps } = props;

  const bestAria = a11yText || bodyText || "Loading"; // TODO: l10n

  return (
    <sc.ProgressBar data-pka-anchor="progress-bar" {...moreProps}>
      <Heading level={3}>{header}</Heading>
      <sc.Bar>
        <sc.BarFiller completed={completed} />
      </sc.Bar>
      <sc.Body>{bodyText}</sc.Body>
      <sc.BarAria role="alert" aria-live="polite">
        {bestAria}
      </sc.BarAria>
    </sc.ProgressBar>
  );
}

ProgressBar.displayName = "ProgressBar";
ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;

export default ProgressBar;
