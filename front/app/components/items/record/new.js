'use strict';

import React, { Component } from 'react';
import createRecord from '_app/actions/create';

const NewRecordComponent = class NewRecordComponent extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
  }
  state = {
    value: ''
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
    ).then(
      this.setState({value: ''})
    );
  }
  handleChange = (event) => {
    this.setState({value: event.target.value});
  }
  render() {
    const {value} = this.state;
    return (
      <input
        onChange    = {this.handleChange}
        onKeyPress  = {this.handleInput}
        placeholder = 'add new record'
        type        = 'text'
        value       = {value}/>
    );
  }
};

export default NewRecordComponent;
