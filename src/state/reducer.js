import { menuItems } from "../data/appData";
import * as actionTypes from "./constants";
import { updateObject } from "../utils/util";

const updateInventory = (inventory, ingredientCost, amount) => {
  const newInventory = { ...inventory };

  // adjust each ingredient
  for (let key in ingredientCost) {
    newInventory[key] -= ingredientCost[key] * amount;
  }
  return newInventory;
};

const updateCartItem = (state, menuItem, quantity, quantityDiff) => {
  // update cart and inventory based on quantity of item updated.
  const updatedCart = updateObject(state.cart, { [menuItem]: { quantity } });
  const updatedInventory = updateInventory(
    state.inventory,
    menuItems[menuItem].ingredients,
    quantityDiff
  );

  return updateObject(state, {
    cart: updatedCart,
    inventory: updatedInventory
  });
};

const handleAddCartItem = (state, menuItem) => {
  let quantity = 0;
  if (menuItem in state.cart) {
    quantity = state.cart[menuItem].quantity;
  }
  quantity++;

  return updateCartItem(state, menuItem, quantity, 1);
};

const handleUpdateQuantityCartItem = (state, menuItem, quantity) => {
  const cartItem = { quantity: 0 };
  // if menu item doesn't exist in the cart than quantityDiff defaults
  // to quantity
  let quantityDiff = quantity;
  if (menuItem in state.cart) {
    cartItem.quantity = state.cart[menuItem].quantity;
    quantityDiff = quantity - cartItem.quantity;
  }
  cartItem.quantity += quantityDiff;

  return updateCartItem(state, menuItem, quantity, quantityDiff);
};

const createOrder = (cartData) => {
  const orderItems = [];

  // create new order out of current cart data
  let orderTotal = 0;
  for (let key in cartData) {
    orderItems.push({
      ...cartData[key],
      name: key,
      price: menuItems[key].price
    });
    orderTotal += menuItems[key].price * cartData[key].quantity;
  }
  const orderData = {
    orderItems,
    // use timestamp for unique order ID
    id: Date.now(),
    orderTotal
  };
  return orderData;
};

const handleUpdateOrderStatus = (state, orderId, fromStatus, toStatus) => {
  let fromOrders = [...state.orders[fromStatus]];
  // find order index
  const removeIndex = fromOrders.findIndex((item) => {
    return item.id === orderId;
  });

  // get and remove order at order index
  const removedOrder = fromOrders.splice(removeIndex, 1)[0];

  // move to new status
  let toOrders = [...state.orders[toStatus]];
  toOrders.push(removedOrder);

  const updatedOrders = updateObject(state.orders, {
    [fromStatus]: fromOrders,
    [toStatus]: toOrders
  });
  return updateObject(state, { orders: updatedOrders });
};

const handleAddOrder = (state) => {
  const openOrders = [...state.orders["open"]];
  openOrders.push(createOrder(state.cart));
  // add order and reset cart
  const updatedOrders = updateObject(state.orders, { open: openOrders });
  return updateObject(state, { orders: updatedOrders, cart: {} });
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_CART_ITEM:
      return handleAddCartItem(state, action.menuItem);
    case actionTypes.UPDATE_QUANTITY_CART_ITEM:
      return handleUpdateQuantityCartItem(
        state,
        action.menuItem,
        action.quantity
      );
    case actionTypes.ADD_ORDER:
      return handleAddOrder(state);
    case actionTypes.UPDATE_ORDER_STATUS:
      return handleUpdateOrderStatus(
        state,
        action.orderId,
        action.fromStatus,
        action.toStatus
      );
    default:
      return state;
  }
};

export default reducer;
