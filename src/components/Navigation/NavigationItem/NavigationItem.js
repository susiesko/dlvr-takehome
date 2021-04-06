import React from "react";

import Link from "../../Router/Link/Link";

import classes from "./NavigationItem.module.css";

const NavigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <Link
        href={props.href}
        onClick={props.onNavClick}
        ariaDescribedBy={`Go to ${props.page} page`}
      >
        {props.children}
      </Link>
    </li>
  );
};

export default NavigationItem;
