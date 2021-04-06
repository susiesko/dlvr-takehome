import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  let classNames = [classes.Card];
  classNames = props.className
    ? classNames.concat(props.className)
    : classNames;

  return (
    <div className={classNames.join(" ")} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
