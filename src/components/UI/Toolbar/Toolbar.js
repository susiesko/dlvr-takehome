import React from "react";

import classes from "./Toolbar.module.css";

import Navigation from "../../../containers/Navigation/Navigation";
import Logo from "../Logo/Logo";

const Toolbar = () => {
  return (
    <div className={classes.Toolbar}>
      <Logo />
      <Navigation />
    </div>
  );
};

export default Toolbar;
