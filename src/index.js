import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Login from './login';

ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>
), document.getElementById('root'));
registerServiceWorker();
