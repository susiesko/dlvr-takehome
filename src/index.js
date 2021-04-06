import React from "react";
import ReactDOM from "react-dom";

import SandwichShopProvider from "./context/sandwich-shop-context";

import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <SandwichShopProvider>
      <App />
    </SandwichShopProvider>
  </React.StrictMode>,
  rootElement
);
