import React from "react";
import PropTypes from "prop-types";
import Overlay from "@paprika/overlay";
import { zValue } from "@paprika/stylers/lib/helpers";
import { ShirtSizes } from "@paprika/helpers/lib/enums";
import extractChildren from "@paprika/helpers/lib/extractChildren";
import FocusLock from "./components/FocusLock";
import * as sc from "./Modal.styles";

const propTypes = {
  /* Description of the Modal dialog for assistive technology */
  a11yText: PropTypes.string,

  /** The content for the Modal. */
  children: PropTypes.node.isRequired,

  /** Control the visibility of the modal */
  isOpen: PropTypes.bool.isRequired,

  /** Callback triggered when the modal needs to be close */
  onClose: PropTypes.func,

  /** Callback once the modal has been opened event */
  onAfterOpen: PropTypes.func,

  /** Callback once the modal has been closed event */
  onAfterClose: PropTypes.func,

  /* Control the size (max-width) of the modal */
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),

  /** The z-index of the Takeover content */
  zIndex: PropTypes.number,
};

const defaultProps = {
  a11yText: null,
  onAfterClose: () => {},
  onAfterOpen: () => {},
  onClose: () => {},
  size: ShirtSizes.MEDIUM,
  zIndex: zValue(6),
};

const Modal = props => {
  const { a11yText, isOpen, onClose, onAfterClose, onAfterOpen, size, zIndex, ...moreProps } = props;

  const {
    "Modal.FocusLock": focusLockExtracted,
    "Modal.Overlay": overlayExtracted,
    "Modal.Header": headerExtracted,
    "Modal.Content": contentExtracted,
    "Modal.Footer": footerExtracted,
    children,
  } = extractChildren(moreProps.children, [
    "Modal.FocusLock",
    "Modal.Overlay",
    "Modal.Header",
    "Modal.Content",
    "Modal.Footer",
  ]);

  const focusLockProps = focusLockExtracted ? focusLockExtracted.props : {};
  const overlayProps = overlayExtracted ? overlayExtracted.props : {};

  const focusLockOptions = {
    as: sc.FocusLock,
    lockProps: { size },
    ...(focusLockProps || {}),
  };

  const ariaLabel = a11yText || (headerExtracted ? headerExtracted.props.children : null);

  return (
    <Overlay
      data-pka-anchor="modal.overlay"
      isOpen={isOpen}
      onClose={onClose}
      onAfterOpen={onAfterOpen}
      onAfterClose={onAfterClose}
      zIndex={zIndex}
      {...overlayProps}
      focusLockOptions={focusLockOptions}
    >
      {state => (
        <sc.Wrapper size={size} data-pka-anchor="modal.wrapper" {...moreProps}>
          <sc.Dialog state={state} role="dialog" aria-modal="true" aria-label={ariaLabel} data-pka-anchor="modal">
            {headerExtracted && <sc.Header {...headerExtracted.props} onClose={onClose} />}
            <sc.ContentWrapper role="region" tabIndex="0">
              {contentExtracted && <sc.Content {...contentExtracted.props} />}
              {children}
            </sc.ContentWrapper>
            {footerExtracted && <sc.Footer {...footerExtracted.props} />}
          </sc.Dialog>
        </sc.Wrapper>
      )}
    </Overlay>
  );
};

Modal.FocusLock = FocusLock;
Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
