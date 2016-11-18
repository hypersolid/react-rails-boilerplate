'use strict';

import {Link} from 'react-router';
import React, { Component } from 'react';

const MainLayoutComponent = class MainLayoutComponent extends Component {
  render() {
    return (
      <div>
      <div>
        <Link to='/'>Index</Link>
        &nbsp;
        <Link to='/about'>About</Link>
        &nbsp;
        <Link to='/logout'>Logout</Link>
      </div>
      <div>
        {this.props.children}
      </div>
      </div>
    );
  }
};

export default MainLayoutComponent;
