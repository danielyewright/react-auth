import React from 'react';
import AuthService from './auth';

class Login extends React.Component {
  constructor() {
    super();
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
    this.Auth.login(this.state.username, this.state.password)
      .then(res => {
        this.props.history.replace('/');
      })
      .catch(err => {
        alert(err);
      })
  }

  render() {
    return(
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="username" placeholder="Username" onChange={this.handleChange} required />
          <br />
          <input type="password" name="password" placeholder="Password" onChange={this.handleChange} required />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default Login;
