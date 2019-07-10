import React from "react";
import DropdownMenu from "../../src";

const DropdownMenuExample = () => {
  return (
    <DropdownMenu
      align="bottom"
      renderTrigger={({ isOpen, handleOpenMenu }) => (
        <DropdownMenu.Trigger isOpen={isOpen} handleOpenMenu={handleOpenMenu}>
          Trigger
        </DropdownMenu.Trigger>
      )}
    >
      <DropdownMenu.Item onClick={() => {}}>Edit</DropdownMenu.Item>
      <DropdownMenu.Item onClick={() => {}}>Duplicate</DropdownMenu.Item>
      <DropdownMenu.Item isDestructive isDisabled onClick={() => {}}>
        Google
      </DropdownMenu.Item>
      <DropdownMenu.Item isLink onClick={() => {}}>
        Is Link Item
      </DropdownMenu.Item>
      <DropdownMenu.Item isDisabled onClick={() => {}}>
        Galvanize
      </DropdownMenu.Item>
      <DropdownMenu.Divider />
      <DropdownMenu.Item
        isDestructive
        renderConfirmation={handleCloseMenu => {
          return (
            <DropdownMenu.Confirmation
              confirmLabel="Delete filter"
              description="Lorem ipsum dolor amet vexillologist tacos selvage narwhal butcher twee ethical hot chicken."
              onConfirm={() => handleCloseMenu()}
              onCancel={() => handleCloseMenu()}
              title="Delete filter?"
            />
          );
        }}
      >
        Delete filter
      </DropdownMenu.Item>
    </DropdownMenu>
  );
};

export default DropdownMenuExample;
