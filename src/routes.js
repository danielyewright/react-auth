import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import App from './App';
import Login from './login';
import Register from './register';
import ProtectedPage from './protected';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/protected" component={ProtectedPage} />
    <Redirect to="/" />
  </Switch>
)

export default Routes;
