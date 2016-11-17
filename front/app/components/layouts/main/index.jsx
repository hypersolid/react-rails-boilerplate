'use strict';

import {Link} from 'react-router';
import React, { Component } from 'react';

const MainLayoutComponent = class MainLayoutComponent extends Component {
  render() {
    return (
      <div>
      <div>
        <Link to='/'>Главная</Link>
        &nbsp;
        <Link to='/about'>О нас</Link>
        &nbsp;
        <Link to='/faq'>О вас</Link>
      </div>
      <div>
        {this.props.children}
      </div>
      </div>
    );
  }
};

export default MainLayoutComponent;
