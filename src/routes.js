import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './home';
import Login from './login';
import Register from './register';

const Routes = () => (
  <Switch>
    {/* <Route exact path="/" component={App} /> */}
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Redirect to="/login" />
  </Switch>
)

export default Routes;
