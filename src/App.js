import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import Cart from "./cart/Cart";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
