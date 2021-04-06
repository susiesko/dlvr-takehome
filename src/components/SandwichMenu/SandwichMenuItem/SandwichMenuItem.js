import React from "react";

import Card from "../../UI/Card/Card";
import ImageIcon from "../../UI/Icons/ImageIcon";

import classes from "./SandwichMenuItem.module.css";

// display layout for sandwich menu
const SandwichMenuItem = ({ name, price, button, addDisabled }) => {
  const imageIconStyle = {
    width: "150px",
    height: "150px"
  };

  return (
    <Card>
      <div className={classes.SandwichMenuItem}>
        <div>
          <h3 style={{ margin: "0px" }}>{name}</h3>
        </div>
        <div className={classes.ImageIcon}>
          <ImageIcon style={imageIconStyle} />
        </div>
        <div style={{ fontWeight: "bold" }}>${price}</div>
        <div style={{ marginTop: "10px" }}>{button}</div>
      </div>
    </Card>
  );
};

export default React.memo(SandwichMenuItem);
