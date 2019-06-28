import React from "react";
import { action } from "@storybook/addon-actions";
import SortableComponent from "../../src";

const Sortable = props => {
  const { children: initChildren, ...knobProps } = props;
  const [children, setChildren] = React.useState(initChildren);

  React.useEffect(() => {
    setChildren(initChildren);
  }, [initChildren]);

  const handleChange = result => {
    action("Item dropped")(JSON.stringify(result));

    const { source, destination } = result;

    if (destination === null || source === destination) return;

    const reorderedChildren = [...children];
    const movedChild = reorderedChildren.splice(source, 1);
    reorderedChildren.splice(destination, 0, ...movedChild);

    setChildren(reorderedChildren);
  };

  const handleRemove = index => {
    const prunedChildren = [...children];
    prunedChildren.splice(index, 1);

    setChildren(prunedChildren);
    action("Item removed")(index);
  };

  return (
    <SortableComponent onChange={handleChange} onRemove={handleRemove} {...knobProps}>
      {children}
    </SortableComponent>
  );
};

Sortable.propTypes = SortableComponent.propTypes;
Sortable.defaultProps = SortableComponent.defaultProps;

export default Sortable;
