import React from 'react';
import { Link } from 'react-router-dom';
import AuthService from './auth';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      isDisabled: false,
      isLoading: false,
      errMessage: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.Auth = new AuthService();
  }

  componentWillMount() {
    if (this.Auth.loggedIn()) {
      this.props.history.replace('/');
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({
      isDisabled: true,
      isLoading: true
    })

    this.Auth.register(this.state.email, this.state.firstName, this.state.lastName, this.state.password)
      .then(response => {
        this.setState({
          isDisabled: false,
          isLoading: false
        })
        this.props.history.replace('/login');
      })
      .catch(err => {
        this.setState({
          isDisabled: false,
          isLoading: false,
          errMessage: err.message
        })
      })
  }

  render() {
    return (
      <div>
        <div className="login-form">
          <form className="form-register" onSubmit={this.handleFormSubmit} noValidate>
            <h1 className="h3 mb-3 font-weight-normal">Setup a new account</h1>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input type="email" name="email" id="email" className="form-control" placeholder="Email address" onChange={this.handleChange} required autoFocus />
            <label htmlFor="firstName" className="sr-only">First Name</label>
            <input type="text" name="firstName" id="firstName" className="form-control" placeholder="First Name" onChange={this.handleChange} required />
            <label htmlFor="lastName" className="sr-only">Last Name</label>
            <input type="text" name="lastName" id="lastName" className="form-control" placeholder="Last Name" onChange={this.handleChange} required />
            <label htmlFor="password" className="sr-only">Password</label>
            <input type="password" name="password" id="password" className="form-control" placeholder="Password" onChange={this.handleChange} required />
            {
              this.state.isLoading ? (
                <button type="submit" className="btn btn-lg btn-dark btn-block" disabled={this.state.isDisabled}>Creating account...</button>
              ) : <button type="submit" className="btn btn-lg btn-dark btn-block" disabled={this.state.isDisabled}>Create account</button>
            }
            <div className="mt-3">
              <Link to="/login" replace>Login to your account</Link>
            </div>
            <div className="text-center text-danger mt-3">{this.state.errMessage}</div>
            <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
          </form>
        </div>
      </div>
    )
  }
}

export default Register;
