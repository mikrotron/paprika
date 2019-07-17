import React from "react";
import PropTypes from "prop-types";

import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import isNil from "lodash/isNil";
import uuid from "uuid/v1";

import Description from "./components/Description";
import ErrorMessage from "./components/ErrorMessage";
import Hint from "./components/Hint";
import Label from "./components/Label";

import { extractChildren } from "./helpers/extractChildren";

import formElementStyles from "./FormElement.styles";

const propTypes = {
  children: PropTypes.node.isRequired,

  /** Id of the input */
  id: PropTypes.string,

  /** Should be disabled or not, default is false. */
  isDisabled: PropTypes.bool,

  /** Should label and children be inline or not, default is false. */
  isInline: PropTypes.bool,

  /** Should label be hidden, default is false. Note: this is discouraged because of accessibility requirements. */
  isLabelVisuallyHidden: PropTypes.bool,

  /** Should show is optional text besides the label or not. */
  isOptional: PropTypes.bool,

  /** Should be read-only or not, default is false. */
  isReadOnly: PropTypes.bool,

  /** Should show is required text besides the label or not. */
  isRequired: PropTypes.bool,

  /** Label text of this field. */
  label: PropTypes.string.isRequired,

  /** Size of the label, child component, error, hint and description (font size, min-height, padding, etc). */
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
};

const defaultProps = {
  id: null,
  isDisabled: false,
  isInline: false,
  isLabelVisuallyHidden: false,
  isOptional: false,
  isReadOnly: false,
  isRequired: false,
  size: "medium",
};

function FormElement(props) {
  const {
    children,
    id,
    isDisabled,
    isInline,
    isLabelVisuallyHidden,
    isOptional,
    isReadOnly,
    isRequired,
    label,
    size,
  } = props;

  const extratedChildren = extractChildren(children, [
    "FormElement.Description",
    "FormElement.Error",
    "FormElement.Hint",
  ]);

  let isFooterInserted = false;

  const uniqueId = isNil(id) ? uuid() : id;
  const ariaDescriptionId = uuid();

  function renderFooter() {
    if (isFooterInserted) return;
    isFooterInserted = true;
    return (
      extratedChildren["FormElement.Error"] ||
      React.cloneElement(extratedChildren["FormElement.Description"], {
        ariaDescriptionId,
      })
    );
  }

  return (
    <div css={formElementStyles} isInline={isInline} size={size} isDisabled={isDisabled}>
      <Label
        hint={extratedChildren["FormElement.Hint"]}
        id={uniqueId}
        isInline={isInline}
        isVisuallyHidden={isLabelVisuallyHidden}
        isOptional={isOptional}
        isRequired={isRequired}
        label={label}
      />

      {extratedChildren.children.map(child => {
        if (React.isValidElement(child)) {
          const clonedChild = (
            <child.type
              {...child.props}
              hasError={!!extratedChildren["FormElement.Error"]}
              id={uniqueId}
              isDisabled={isDisabled}
              isReadOnly={isReadOnly}
              size={size}
              aria-describedby={ariaDescriptionId}
            >
              {child.props.children}
            </child.type>
          );

          return (
            <React.Fragment key={child.key}>
              {isInline ? (
                <div>
                  {clonedChild}
                  {renderFooter()}
                </div>
              ) : (
                <React.Fragment>
                  {clonedChild}
                  {renderFooter()}
                </React.Fragment>
              )}
            </React.Fragment>
          );
        }

        return child;
      })}
    </div>
  );
}

FormElement.displayName = "FormElement";

FormElement.propTypes = propTypes;
FormElement.defaultProps = defaultProps;

FormElement.Description = Description;
FormElement.Error = ErrorMessage;
FormElement.Hint = Hint;

export default FormElement;
