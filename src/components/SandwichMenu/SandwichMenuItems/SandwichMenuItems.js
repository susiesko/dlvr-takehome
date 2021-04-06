import React from "react";

import classes from "./SandwichMenuItems.module.css";

// layout container for sandwich menu items
const SandwichMenuItems = (props) => (
  <div className={`${classes.SandwichMenuItems} ${props.className}`}>
    {props.children}
  </div>
);

export default SandwichMenuItems;
