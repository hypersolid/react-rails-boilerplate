'use strict';
import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import NavbarComponent from '_app/components/layouts/navbar';

const MainLayoutComponent = class MainLayoutComponent extends Component {
  render() {
    return (
      <Row>
        <Col
          lg={8}
          lgOffset={2}
          md={10}
          mdOffset={1}
        >
          <NavbarComponent/>
          {this.props.children}
        </Col>
      </Row>
    );
  }
};

export default MainLayoutComponent;
