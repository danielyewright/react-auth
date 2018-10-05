import React from 'react';
import AuthService from './auth';

export default function authGuard(AuthComponent) {
  const Auth = new AuthService('http://localhost:1337');

  return class AuthWrapped extends React.Component {
    constructor() {
      super();
      this.state = {
        user: null
      }
    }

    componentWillMount() {
      if (!Auth.loggedIn()) {
        this.props.history.replace('/login');
      }
      else {
        try {
          const profile = Auth.getProfile();
          this.setState({
            user: profile
          })
        }
        catch(err) {
          Auth.logout();
          this.props.history.replace('/login');
        }
      }
    }

    render() {
      if (this.state.user) {
        return (
          <div>
            <AuthComponent history={this.props.history} user={this.state.user} />
          </div>
        )
      }
      else {
        return null
      }
    }
  }
}
