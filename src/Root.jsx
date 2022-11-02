import React, { useEffect } from "react";
import { MainActions } from "redux-store/models";
import { connect } from "react-redux";
import { HashRouter, Switch, Route } from "react-router-dom";
import * as Routes from "routes";

const Root = ({ get, set, stateKey }) => {
  useEffect(() => {
    get({ testparam: 321 });
    set("321");
  }, []);
  console.log("test", stateKey);

  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Routes.Home />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
};

const mapStateToProps = ({ main: { stateKey } }) => ({ stateKey });
export default connect(mapStateToProps, { ...MainActions })(Root);
