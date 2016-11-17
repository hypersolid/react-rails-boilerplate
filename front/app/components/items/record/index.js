'use strict';

import React, { Component } from 'react';
import updatePost from '_app/actions/update';


const RecordComponent = class RecordComponent extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    id: React.PropTypes.number,
    title: React.PropTypes.string
  }
  state = {
    inputMode: false
  }
  handleClick() {
    !this.state.inputMode
      ? this.setState({inputMode: true})
      : null;
  }
  handleInput(e) {
    switch (e.charCode) {
      case 13:
        this.submit(e);
        break;
      default:
    }
  }
  renderInput(value) {
    return (
      <input
        onKeyPress  = {this.handleInput.bind(this)}
        placeholder = {value}
        type        = 'text'/>
    );
  }
  submit(e) {
    const {id, dispatch} = this.props;
    dispatch(updatePost(id, e.target.value));
  }
  render() {
    const {inputMode} = this.state;
    const {id, title} = this.props;
    console.log(id);
    return (
        <li key={id} onClick={this.handleClick.bind(this)}>
          {
            inputMode ? this.renderInput(title) : title
          }
        </li>
    );
  }
};

export default RecordComponent;
