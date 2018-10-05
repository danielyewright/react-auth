import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import authGuard from './auth-guard';
import AuthService from './auth';

class Navbar extends React.Component {
  constructor() {
    super();

    this.handleLogout = this.handleLogout.bind(this);
    this.Auth = new AuthService();
  }

  handleLogout() {
    this.Auth.logout();
    window.location.reload();
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
          <NavLink to="/" className="navbar-brand" replace>React Auth</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link" onClick={this.handleLogout} replace>Logout</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default authGuard(Navbar);
