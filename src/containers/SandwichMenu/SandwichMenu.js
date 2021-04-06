import React from "react";

import { SandwichShopContext } from "../../context/sandwich-shop-context";

import SandwichMenuItems from "../../components/SandwichMenu/SandwichMenuItems/SandwichMenuItems";
import SandwichMenuItem from "../../components/SandwichMenu/SandwichMenuItem/SandwichMenuItem";

import { menuItems } from "../../data/appData";

const SandwichMenu = (props) => {
  const { addItem, getMenuItemCountLeftInStock } = React.useContext(
    SandwichShopContext
  );

  const menuItemElements = Object.keys(menuItems).map((key) => {
    const item = menuItems[key];
    const outOfStock = !(getMenuItemCountLeftInStock(key) > 0);
    // disable button when out of stock
    let buttonEl = (
      <button
        aria-label={`Add ${key} to Order`}
        onClick={(ev) => addItem(item.name)}
      >
        Add to Order
      </button>
    );
    if (outOfStock) {
      buttonEl = <button disabled>Out of Stock</button>;
    }

    return (
      <div key={item.name} className="xs-12 md-6 lg-4 cell">
        <SandwichMenuItem {...item} button={buttonEl} />
      </div>
    );
  });

  return (
    <SandwichMenuItems className="spacing-5">
      {menuItemElements}
    </SandwichMenuItems>
  );
};

export default SandwichMenu;
