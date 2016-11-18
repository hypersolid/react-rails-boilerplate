'use strict';

import React, { Component } from 'react';
import AuthForm from '_app/components/auth/login';

const AuthPageComponent = class AuthPageComponent extends Component {
  static propTypes = {
    location: React.PropTypes.object,
    router: React.PropTypes.object
  }
  render() {
    const {location, router} = this.props;
    return (
      <AuthForm location={location} router={router}/>
    );
  }
};

export default AuthPageComponent;
