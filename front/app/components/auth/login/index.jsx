'use strict';

import React, { Component } from 'react';
import auth from '_app/lib/auth';
import { Panel } from 'react-bootstrap';
import styles from './styles';
import {API_URL, ENTRY_PAGE} from '_app/config';

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

    const authData = {user: {login, password}};
    auth.login(authData, `${API_URL}/tokens`, (loggedIn) => {
      if (!loggedIn) this.setState({ error: true });
      const { location } = this.props;
      if (location.state && location.state.nextPathname) {
        this.props.router.replace(location.state.nextPathname);
      } else {
        this.props.router.replace(ENTRY_PAGE);
      }
    });
  }
  render = () => {
    return (
      <Panel className={styles.from} header='Authorization'>
        <form onSubmit={this.handleSubmit}>
          <div className={styles.errorMessage}>
            {this.state.error && 'Incorrect login or password'}
          </div>
          <input
            className={styles.element}
            placeholder='login'
            ref='login'
          />
          <input
            className={styles.element}
            placeholder='password'
            ref='password'
            type='password'
          />
          <button
            className={styles.element}
            type='login'
          >
            login
          </button>
        </form>
      </Panel>
    );
  }
};

export default AuthForm;
