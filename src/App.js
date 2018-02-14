import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import AuthService from './auth';
import authGuard from './auth-guard';

const Auth = new AuthService();

class App extends Component {
  constructor() {
    super();
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    Auth.logout();
    this.props.history.replace('/login');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome {this.props.user.username}</h1>
        </header>
        <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
          <button type="button" onClick={this.handleLogout}>Logout</button>
        </p>
      </div>
    );
  }
}

export default authGuard(App);
