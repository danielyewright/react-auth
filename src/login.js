import React from 'react';
import { Link } from 'react-router-dom';
import AuthService from './auth';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
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
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({
      isDisabled: true,
      isLoading: true
    });

    this.Auth.login(this.state.email, this.state.password)
      .then(response => {
        try {
          if (!this.state.email && !this.state.password) {
            this.setState({
              isDisabled: false,
              isLoading: false,
              errMessage: 'Email and Password are required'
            })
          }
          else if (!this.state.email && this.state.password) {
            this.setState({
              isDisabled: false,
              isLoading: false,
              errMessage: 'Email is required'
            })
          }
          else if (this.state.email && !this.state.password) {
            this.setState({
              isDisabled: false,
              isLoading: false,
              errMessage: 'Password is required'
            })
          }
          else {
            this.setState({
              isDisabled: false,
              isLoading: false,
              errMessage: response.message
            })
            this.props.history.replace('/');
          }
        }
        catch(err) {
          this.setState({
            errMessage: err.message
          })
        }
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
          <form className="form-signin" onSubmit={this.handleFormSubmit} noValidate>
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input type="email" name="email" id="email" className="form-control" placeholder="Email address" onChange={this.handleChange} required autoFocus />
            <label htmlFor="password" className="sr-only">Password</label>
            <input type="password" name="password" id="password" className="form-control" placeholder="Password" onChange={this.handleChange} required />
            {
              this.state.isLoading ? (
                <button type="submit" className="btn btn-lg btn-dark btn-block" disabled={this.state.isDisabled}>Logging in...</button>
              ) : <button type="submit" className="btn btn-lg btn-dark btn-block" disabled={this.state.isDisabled}>Login</button>
            }
            <div className="mt-3">
              <Link to="/register" replace>Register an account</Link>
            </div>
            <div className="text-center text-danger mt-3">{this.state.errMessage}</div>
            <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;
