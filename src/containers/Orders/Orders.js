import React, { useState } from "react";

import Card from "../../components/UI/Card/Card";
import Order from "../../components/Orders/Order/Order";

import OrderStatusFilter from "../../components/Orders/OrderStatusFilter/OrderStatusFilter";

import { SandwichShopContext } from "../../context/sandwich-shop-context";

const getOrderStatusValues = (status) => {
  switch (status) {
    case "open":
      return {
        toStatus: "picked-up",
        buttonTitle: "Click to mark order as picked-up."
      };
    case "picked-up":
      return {
        toStatus: "open",
        buttonTitle: "Click to mark order as picked-up."
      };
    default:
      return {
        toStatus: status,
        buttonTitle: ""
      };
  }
};

const Orders = () => {
  const { orders, updateOrderStatus } = React.useContext(SandwichShopContext);
  const [selectedStatus, setSelectedStatus] = useState("all");

  // loop through existing statuses and orders within statuses
  // mind the filter
  let orderElements = [];
  let totalOrderCount = 0;
  for (let status in orders) {
    totalOrderCount += orders[status].length;
    if (!(selectedStatus === "all" || selectedStatus === status)) {
      continue;
    }
    const statusOrders = orders[status];
    const orderStatusValues = getOrderStatusValues(status);
    const els = statusOrders.map((order) => {
      return (
        <Card style={{ width: "100%", marginBottom: "10px" }} key={order.id}>
          <Order
            orderData={order}
            onStatusUpdate={(ev) => {
              updateOrderStatus(order.id, status, orderStatusValues.toStatus);
            }}
            buttonTitle={orderStatusValues.buttonTitle}
            status={status}
          />
        </Card>
      );
    });
    orderElements = orderElements.concat(els);
  }

  if (totalOrderCount === 0) {
    return "No orders to display!";
  }

  return (
    <React.Fragment>
      <OrderStatusFilter
        status={selectedStatus}
        onSelectStatus={(val) => setSelectedStatus(val)}
      />
      <div style={{ marginTop: "20px" }}>{orderElements}</div>
    </React.Fragment>
  );
};

export default Orders;
