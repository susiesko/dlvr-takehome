import React from "react";

import classes from "./NavigationItems.module.css";

const NavigationItems = (props) => (
  <ul className={classes.NavigationItems}>{props.children}</ul>
);

export default NavigationItems;
