import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppMain from "./components/App/Main";
import DashboardMain from "./components/Dashboard/Main";

function MainRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={AppMain} />
          <Route path="/dashboard" component={DashboardMain} />
        </Switch>
      </div>
    </Router>
  );
}

export default MainRouter;
