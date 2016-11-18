'use strict';

import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import {Link} from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

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
          <LinkContainer to='/logout'><NavItem>Logout</NavItem></LinkContainer>
        </Nav>
      </Navbar>
    );
  }
};

export default NavbarComponent;
