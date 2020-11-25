import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Hello from "routes/Hello";
import Home from "routes/Home";
import Navigation from "components/Navigation";

const AppRouter = () => {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/hello">
          <Hello></Hello>
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default AppRouter;
