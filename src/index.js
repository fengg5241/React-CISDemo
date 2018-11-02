import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reducer from "./reducers";
import Router from "./route";

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}
// Add the reducer to your store on the `routing` key
const store = createStore(reducer, applyMiddleware(...middleware));


render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
