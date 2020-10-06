/* eslint-disable react/jsx-wrap-multilines */
import React from "react";
import * as constants from "@paprika/constants/lib/Constants";

import { Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import Input from "@paprika/input";
import FormElement from "../../src/FormElement";

export default function ComponentLabelExample() {
  const hasRequiredLabel = false;
  const errorText = "";
  const isDisabled = false;
  const isReadOnly = false;
  const size = constants.size.MEDIUM;
  const [value, setValue] = React.useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <>
      <Tagline>Form Element using component in label</Tagline>
      <br />
      <FormElement
        hasRequiredLabel={hasRequiredLabel}
        label={
          <Heading level={5}>
            <strong>
              <i>Form Label</i>
            </strong>
          </Heading>
        }
      >
        <FormElement.Instructions>
          <span>
            Example text for extra panel for questionnaires. Example text for extra panel for questionnaires Example
            text for extra panel for questionnaires. Example text for extra panel for questionnaires
          </span>
        </FormElement.Instructions>
        <FormElement.Content>
          {({ idForLabel, ariaDescribedBy }) => (
            <Input
              id={idForLabel}
              onChange={handleChange}
              value={value}
              placeholder="Form placeholder"
              aria-describedby={ariaDescribedBy}
              aria-required={hasRequiredLabel}
              hasError={Boolean(errorText.length)}
              isDisabled={isDisabled}
              isReadOnly={isReadOnly}
              size={size}
            />
          )}
        </FormElement.Content>
        <FormElement.Help>
          Give me some help. <a href="wegalvanize.com">Learn more</a>.
        </FormElement.Help>
      </FormElement>
    </>
  );
}
