import * as React from "react";
import "./assets/css/styles.css";
import "./assets/css/grid.css";
import "./assets/css/input.css";

import Route from "./components/Router/Route/Route";
import NewOrder from "./containers/NewOrder/NewOrder";
import Orders from "./containers/Orders/Orders";
import Layout from "./containers/Layout/Layout";

export default function App() {
  return (
    <Layout>
      <Route path="/">
        <div>Click 'New Orders' to get started!</div>
      </Route>
      <Route path="/new-order">
        <NewOrder />
      </Route>
      <Route path="/orders">
        <Orders />
      </Route>
    </Layout>
  );
}
