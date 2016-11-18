'use strict';
import React, { Component } from 'react';
import NavbarComponent from '_app/components/layouts/navbar';

const MainLayoutComponent = class MainLayoutComponent extends Component {
  render() {
    return (
      <div>
        <NavbarComponent/>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
};

export default MainLayoutComponent;
