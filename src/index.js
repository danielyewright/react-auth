import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';

ReactDOM.render((
  <Router>
    <div>
      <Routes />
    </div>
  </Router>
), document.getElementById('root'));
registerServiceWorker();
