'use strict';

import React, { Component } from 'react';
import auth from '_app/lib/auth';

const LogoutComponent = class LogoutComponent extends Component {
  static propTypes = {
    router: React.PropTypes.object
  }
  componentDidMount() {
    auth.logout(() => {
      this.props.router.replace('/login');
    });
  }
  render() {
    return null;
  }
};

export default LogoutComponent;
