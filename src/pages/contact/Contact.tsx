import React, { VFC, memo } from "react";
import { Redirect, RouteComponentProps, Switch, Route } from "react-router";
import { Home } from "./Home";
import { Thanks } from "./Thanks";

const Contact: VFC<RouteComponentProps> = ({ match }) => {
  return (
    <Switch>
      <Route exact path={`${match.path}/thanks`}>
        <Thanks />
      </Route>
      <Route exact path={`${match.path}`}>
        <Home />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export const ContactMemo = memo(Contact);
