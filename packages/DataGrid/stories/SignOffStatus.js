import React from "react";
import PropTypes from "prop-types";
import Pill from "@paprika/pill";
import Popover from "@paprika/popover";
import tokens from "@paprika/tokens";
import CheckCircle from "wasabicons/lib/CheckCircle";

const propTypes = {
  maxSignedOffs: PropTypes.number,
  numberOfSignOffs: PropTypes.number,
};

const defaultProps = {
  maxSignedOffs: null,
  numberOfSignOffs: null,
};

function SignOffStatus({ numberOfSignOffs, maxSignedOffs }) {
  if (numberOfSignOffs === maxSignedOffs) {
    return (
      <Popover isEager>
        <Popover.Trigger>
          <CheckCircle color={tokens.color.green} />
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Card>HELLO ME</Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
    );
  }

  return (
    <Pill
      size="small"
      pillColor={numberOfSignOffs === 0 ? "lightOrange" : "lightBlue"}
      className="sign-off-status__pill"
    >
      {numberOfSignOffs}/{maxSignedOffs}
    </Pill>
  );
}

SignOffStatus.propTypes = propTypes;
SignOffStatus.defaultProps = defaultProps;
export default SignOffStatus;
