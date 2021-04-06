import React from "react";

import classes from "./Container.module.css";

const Container = (props) => {
  const containerClasses = [classes.Container];
  if (props.xs) {
    containerClasses.push(classes.XS);
  } else if (props.sm) {
    containerClasses.push(classes.SM);
  } else if (props.md) {
    containerClasses.push(classes.MD);
  } else if (props.lg) {
    containerClasses.push(classes.LG);
  }

  return <div className={containerClasses.join(" ")}>{props.children}</div>;
};

export default Container;
