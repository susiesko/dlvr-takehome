import React from "react";
import Card from "../../components/UI/Card/Card";

import { SandwichShopContext } from "../../context/sandwich-shop-context";

import CartItem from "../../components/Cart/CartItem";
import CartLayout from "../../components/Cart/CartLayout";

import { menuItems } from "../../data/appData";

const Cart = () => {
  const {
    cart,
    updateItem,
    getMenuItemCountLeftInStock,
    submitOrder
  } = React.useContext(SandwichShopContext);
  const [submitSuccessMessage, setSubmitSuccessMessage] = React.useState(null);

  // get cart totals:
  // total quantity will be useful for determining whether we should display cart items or
  // 'Add an item!'
  const cartTotals = React.useMemo(() => {
    return Object.keys(cart).reduce(
      (prev, nextName) => {
        const next = cart[nextName];
        return {
          totalPrice:
            prev.totalPrice + menuItems[nextName].price * next.quantity,
          totalQuantity: prev.totalQuantity + next.quantity
        };
      },
      { totalPrice: 0, totalQuantity: 0 }
    );
  }, [cart]);

  const items = React.useMemo(() => {
    return Object.keys(cart).map((name) => {
      // don't display anything if quantity is 0
      if (cart[name].quantity === 0) {
        return null;
      }
      return (
        <CartItem
          key={name}
          name={name}
          price={menuItems[name].price}
          leftInStock={getMenuItemCountLeftInStock(name)}
          onQuantityChange={(ev) => updateItem(name, +ev.target.value)}
          quantity={cart[name].quantity}
          edit
        />
      );
    });
  }, [cart, updateItem, getMenuItemCountLeftInStock]);

  const onOrderSubmit = (ev) => {
    submitOrder();
    setSubmitSuccessMessage("Order submitted!");

    setTimeout(() => {
      setSubmitSuccessMessage(null);
    }, 3000);
  };

  let cartDisplay = "Add an item!";
  if (submitSuccessMessage) {
    cartDisplay = "Order submitted!";
  }

  if (cartTotals.totalQuantity > 0) {
    cartDisplay = (
      <CartLayout totalPrice={cartTotals.totalPrice} onSubmit={onOrderSubmit}>
        {items}
      </CartLayout>
    );
  }

  return <Card>{cartDisplay}</Card>;
};

export default Cart;
