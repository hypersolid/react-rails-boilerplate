'use strict';

import React, { Component } from 'react';
import auth from '_app/lib/auth';

const AuthForm = class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {error: false};
  }
  static propTypes = {
    location: React.PropTypes.object,
    router: React.PropTypes.object
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const login = this.refs.login.value;
    const password = this.refs.password.value;

    auth.login(login, password, (loggedIn) => {
      if (!loggedIn) this.setState({ error: true });
      const { location } = this.props;
      if (location.state && location.state.nextPathname) {
        this.props.router.replace(location.state.nextPathname);
      } else {
        this.props.router.replace('/');
      }
    });
  }
  render = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder='login' ref='login'/>
        <br />
        <input placeholder='password' ref='password'/>
        <br />
        <button type='login'>login</button>
        {this.state.error && (
          <p>Bad login information</p>
        )}
      </form>
    );
  }
};

export default AuthForm;
