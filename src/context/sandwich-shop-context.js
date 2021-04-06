import React, { useEffect, useReducer } from "react";

import { inventory as initInventory } from "../data/data.json";
import { menuItems } from "../data/appData";

import * as actions from "../state/actions";
import reducer from "../state/reducer";

export const SandwichShopContext = React.createContext({
  cart: {},
  addItem: (menuItem) => {},
  updateItem: (menuItem, qty) => {},
  getMenuItemCountLeftInStock: () => {},
  submitOrder: () => {},
  updateOrderStatus: () => {},
  inventory: {},
  orders: {}
});

export default (props) => {
  const [state, dispatch] = useReducer(reducer, {
    cart: JSON.parse(localStorage.getItem("sandwich-shop-cart")) || {},
    inventory: initInventory,
    orders: {
      open: [],
      "picked-up": []
    }
  });
  const { cart } = state;

  // I don't know whether this function should be part of the context or not?
  // It seems like it could be used in multiple places,
  // so it's a reasonable place; on the other hand, it only serves the purpose
  // of counting inventory, which is only related to a few different
  // events within the application
  const getMenuItemCountLeftInStock = (menuItem) => {
    const ingredientCost = menuItems[menuItem].ingredients;
    // set to -1 to flag that we haven't calculated any stock left yet
    let leftInStock = -1;

    for (let key in ingredientCost) {
      const quantityAvailable = Math.floor(
        state.inventory[key] / ingredientCost[key]
      );

      if (leftInStock === -1) {
        leftInStock = quantityAvailable;
      } else {
        leftInStock = Math.min(quantityAvailable, leftInStock);
      }
    }

    return leftInStock;
  };

  useEffect(() => {
    localStorage.setItem("sandwich-shop-cart", JSON.stringify(cart));
  }, [cart]);

  const updateItem = (menuItem, quantity) => {
    //console.log(menuItem, quantity);
    dispatch(actions.updateQuantityCartItem(menuItem, quantity));
  };

  const addItem = (menuItem) => {
    dispatch(actions.addCartItem(menuItem));
  };

  const submitOrder = () => {
    dispatch(actions.addOrder());
    localStorage.setItem("sandwich-shop-cart", JSON.stringify({}));
  };

  const updateOrderStatus = (orderId, fromStatus, toStatus) => {
    dispatch(actions.updateOrderStatus(orderId, fromStatus, toStatus));
  };

  return (
    <SandwichShopContext.Provider
      value={{
        cart: state.cart,
        addItem,
        updateItem,
        getMenuItemCountLeftInStock,
        submitOrder,
        inventory: state.inventory,
        orders: state.orders,
        updateOrderStatus
      }}
    >
      {props.children}
    </SandwichShopContext.Provider>
  );
};
