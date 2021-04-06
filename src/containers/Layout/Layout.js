import React from "react";

import classes from "./Layout.module.css";

import Container from "../UI/Container/Container";
import Toolbar from "../../components/UI/Toolbar/Toolbar";

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <header className={classes.Header}>
        <Container md>
          <Toolbar />
        </Container>
      </header>

      <div className={classes.Content}>
        <Container md>{props.children}</Container>
      </div>

      <footer className={classes.Footer}>
        <Container md></Container>
      </footer>
    </div>
  );
};

export default Layout;
