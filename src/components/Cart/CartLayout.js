import React from "react";

import { formatCurrency } from "../../utils/formatter";

const CartLayout = ({ children, totalPrice, onSubmit }) => {
  return (
    <React.Fragment>
      <h2 style={{ marginTop: "0px" }}>Order Items</h2>
      {children}
      <div className="row spacing-1">
        <div className="xs-12 cell align-right">
          Total: {formatCurrency(totalPrice)}
        </div>
      </div>
      <div className="row spacing-1">
        <div className="xs-12 cell align-right">
          <button aria-label="Submit Order" onClick={onSubmit}>
            Submit Order
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartLayout;
