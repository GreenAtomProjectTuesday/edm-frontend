import React from "react";
import { Route, Switch } from "react-router-dom";
import { LoginPage } from './pages/LoginPage/LoginPage';


export const routes = (
    <Switch>
        <Route exact path="/login"><LoginPage /></Route>
        <Route exact path="/">main</Route>

        <Route>not found</Route>
    </Switch>
);
