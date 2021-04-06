import React from "react";

import classes from "./Order.module.css";
import CartItem from "../../Cart/CartItem";
import { formatCurrency } from "../../../utils/formatter";

const OrderSectionHeader = ({ children }) => (
  <h4 className={classes.OrderSectionHeader}>{children}</h4>
);

const Order = ({ orderData, status, onStatusUpdate }) => {
  const statusStyle = {
    textTransform: "capitalize"
  };
  const { orderItems } = orderData;
  const orderItemEls = React.useMemo(() => {
    return orderItems.map((orderItem) => {
      // don't display anything if quantity is 0
      if (orderItem.quantity === 0) {
        return null;
      }
      return (
        <CartItem
          key={orderItem.name}
          name={orderItem.name}
          price={orderItem.price}
          quantity={orderItem.quantity}
        />
      );
    });
  }, [orderItems]);

  return (
    <React.Fragment>
      <h2 style={{ marginTop: "0px" }}>Order #{orderData.id}</h2>
      <div className={`row ${classes.OrderData}`}>
        <div className="xs-12 md-3">
          <OrderSectionHeader>Order Total</OrderSectionHeader>
          <span style={{ fontSize: "30px" }}>
            {formatCurrency(orderData.orderTotal)}
          </span>
        </div>
        <div className="xs-12 md-3">
          <OrderSectionHeader>Order Status</OrderSectionHeader>
          <button
            aria-label={"Switch Status"}
            onClick={onStatusUpdate}
            className={classes[status]}
          >
            <span style={statusStyle}>{status}</span>
          </button>
        </div>
        <div className="xs-12 md-6">
          <OrderSectionHeader>Order Items</OrderSectionHeader>
          {orderItemEls}
        </div>
      </div>
    </React.Fragment>
  );
};

export default React.memo(Order);
