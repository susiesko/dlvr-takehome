import React from "react";

import classes from "./Icon.module.css";

const Icon = ({ children, iconStyle, title }) => {
  return (
    <div style={iconStyle} className={classes.Icon} title={title}>
      {children}
    </div>
  );
};

export default Icon;
