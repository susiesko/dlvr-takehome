import * as actionTypes from "./constants";

export const addCartItem = (menuItem) => ({
  type: actionTypes.ADD_CART_ITEM,
  menuItem
});

export const updateQuantityCartItem = (menuItem, quantity) => ({
  type: actionTypes.UPDATE_QUANTITY_CART_ITEM,
  menuItem,
  quantity
});

export const addOrder = () => ({
  type: actionTypes.ADD_ORDER
});

export const updateOrderStatus = (orderId, fromStatus, toStatus) => ({
  type: actionTypes.UPDATE_ORDER_STATUS,
  orderId,
  fromStatus,
  toStatus
});
