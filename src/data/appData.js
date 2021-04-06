import data from "./data.json";

// convert menu item data into hash map to easily access specific menu item data
export const menuItems = data.menu.reduce((acc, curr) => {
  acc[curr.name] = curr;
  return acc;
}, {});
