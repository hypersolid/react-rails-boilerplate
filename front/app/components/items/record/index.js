'use strict';

import React, { Component } from 'react';

const RecordComponent = class RecordComponent extends Component {
  static propTypes = {
    id: React.PropTypes.number,
    title: React.PropTypes.string
  }
  render() {
    return (
        <li key={this.props.id}>{this.props.title}</li>
    );
  }
};

export default RecordComponent;
