import React from "react";

import classes from "./OrderStatusFilter.module.css";

const orderStatusFilterItems = [
  {
    value: "all",
    text: "All"
  },
  {
    value: "open",
    text: "Open"
  },
  {
    value: "picked-up",
    text: "Picked-Up"
  }
];

const OrderStatusFilter = ({ status, onSelectStatus }) => {
  const filterElements = orderStatusFilterItems.map((filterItem) => {
    return (
      <div>
        <input
          type="radio"
          name="orderStatusFilter"
          value={filterItem.value}
          checked={status === filterItem.value}
        />
        <div
          className={classes.option}
          onClick={(ev) => {
            onSelectStatus(filterItem.value);
          }}
        >
          {filterItem.text}
        </div>
      </div>
    );
  });

  return <div className={classes.OrderStatusFilter}>{filterElements}</div>;
};

export default OrderStatusFilter;
