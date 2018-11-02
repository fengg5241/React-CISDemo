import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./containers/App";
import OtherPage from "./components/OtherPage";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/:id" component={OtherPage} />
    </Switch>
  </BrowserRouter>
);
