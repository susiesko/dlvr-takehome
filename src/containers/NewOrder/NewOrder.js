import React from "react";

import Cart from "../Cart/Cart";
import SandwichMenu from "../SandwichMenu/SandwichMenu";

const NewOrder = () => {
  const classes = ["NewOrder", "row", "spacing-4"];

  return (
    <div className={classes.join(" ")}>
      <div className="xs-12 md-8 cell">
        <SandwichMenu />
      </div>
      <div className="xs-12 md-4 cell">
        <Cart />
      </div>
    </div>
  );
};

export default NewOrder;
