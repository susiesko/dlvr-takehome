import React from "react";

import TimesIcon from "../UI/Icons/TimesIcon";
import { formatCurrency } from "../../utils/formatter";

const CartItem = ({
  name,
  quantity,
  onQuantityChange,
  leftInStock,
  edit,
  price
}) => {
  const timesIconStyle = {
    width: "15px"
  };

  // generate dropdown of quantity values 1 to n, n being quantity + number available in stock
  let quantityOutput = quantity;
  if (edit) {
    const selectionOptions = [...new Array(quantity + leftInStock + 1)].map(
      (item, index) => {
        return (
          <option key={index} value={index}>
            {index}
          </option>
        );
      }
    );

    quantityOutput = (
      <select
        id="quantity"
        aria-label="Sandwich Quantity"
        value={quantity}
        onChange={onQuantityChange}
      >
        {selectionOptions}
      </select>
    );
  }

  return (
    <React.Fragment>
      <div
        className="row spacing-1"
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <div className="xs-3 cell">{name}</div>
        <div className="xs-2 cell align-right">${price}</div>
        <div
          className="xs-1 cell"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <TimesIcon style={timesIconStyle} />
        </div>
        <div className="xs-3 cell">{quantityOutput}</div>
        <div className="xs-3 cell align-right">
          {/* I really dislike javascript math, but I should probably display cents as fixed to 2 places anyway */}
          {formatCurrency(price * quantity)}
        </div>
      </div>
    </React.Fragment>
  );
};
export default CartItem;
