import React from "react";

import NavigationItems from "../../components/Navigation/NavigationItems/NavigationItems";
import NavigationItem from "../../components/Navigation/NavigationItem/NavigationItem";

const Navigation = () => {
  const navItemConfigs = [
    {
      page: "newOrder",
      href: "/new-order",
      displayText: "New Order"
    },
    {
      page: "orders",
      href: "/orders",
      displayText: "Orders"
    }
  ];

  const navItems = navItemConfigs.map((config) => {
    return (
      <NavigationItem key={config.page} page={config.page} href={config.href}>
        {config.displayText}
      </NavigationItem>
    );
  });

  return <NavigationItems>{navItems}</NavigationItems>;
};

export default Navigation;
