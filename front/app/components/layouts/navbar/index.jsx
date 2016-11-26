'use strict';

import React, { Component } from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import auth from '_app/libs/auth';

const NavbarComponent = class NavbarComponent extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>Boilerplate</Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <LinkContainer to='/records'><NavItem>Records</NavItem></LinkContainer>
          <LinkContainer to='/about'><NavItem>About</NavItem></LinkContainer>
          {auth.loggedIn() ? (<LinkContainer to='/logout'><NavItem>Logout</NavItem></LinkContainer>) : null}
        </Nav>
      </Navbar>
    );
  }
};

export default NavbarComponent;
