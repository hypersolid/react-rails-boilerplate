'use strict';

import React, { Component } from 'react';
import createRecord from '_app/actions/create';

const NewRecordComponent = class RecordComponent extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
  }
  state = {
    text: ''
  }
  handleInput = (e) => {
    switch (e.charCode) {
      case 13:
        this.submit(e);
        break;
      default:
    }
  }
  submit = (e) => {
    const {dispatch} = this.props;
    dispatch(
      createRecord(e.target.value)
    );
  }
  render() {
    const {value} = this.state;
    return (
      <input
        defaultValue = {value}
        onKeyPress  = {this.handleInput}
        placeholder = 'add new record'
        type        = 'text'/>
    );
  }
};

export default NewRecordComponent;
