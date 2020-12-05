import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Hello from "routes/Hello";
import Home from "routes/Home";
import Navigation from "components/Navigation";

const AppRouter = ({ toggleDark }) => {
  return (
    <HashRouter>
      <Navigation toggleDark={toggleDark} />
      <Switch>
        <Route exact path="/">
          <Hello />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default AppRouter;
