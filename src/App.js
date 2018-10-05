import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import authGuard from './auth-guard';
import Navbar from './navbar';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Navbar />
        <main role="main" className="container">
          <div className="jumbotron">
            <h1>Welcome, {this.props.user.firstName + ' ' + this.props.user.lastName}!</h1>
            <p className="lead">This example React app is an illustration of how you can implement authentication with an API that uses JWT. Other features will be implemented as requested, or feel free to improve this app on your own. Happy coding!</p>
            <Link className="btn btn-lg btn-primary mt-3" to="/protected" role="button">View protected page &rarr;</Link>
          </div>
        </main>
      </div>
    );
  }
}

export default authGuard(App);
