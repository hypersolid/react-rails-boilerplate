'use strict';

import styles from '_app/components/items/record/styles';

import React, { Component } from 'react';
import updateRecord from '_app/actions/update';
import deleteRecord from '_app/actions/delete';

const RecordComponent = class RecordComponent extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    id: React.PropTypes.number,
    title: React.PropTypes.string
  }
  state = {
    inputMode: false
  }
  showInput = () => {
    this.setState({inputMode: true});
  }
  hideInput = () =>  {
    this.setState({inputMode: false});
  }
  handleInput = (e) => {
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
        autoFocus
        defaultValue = {value}
        onBlur = {this.hideInput}
        onKeyPress  = {this.handleInput}
        type        = 'text'/>
    );
  }
  submit = (e) => {
    const {id, dispatch} = this.props;
    dispatch(updateRecord(id, e.target.value))
      .then(this.hideInput());
  }
  delete = () => {
    const {id, dispatch} = this.props;
    dispatch(deleteRecord(id));
  }
  render() {
    const {inputMode} = this.state;
    const {id, title} = this.props;
    return (
        <li key={id}>
          <span onClick={this.showInput}>
            {inputMode ? this.renderInput(title) : title}
          </span>
          &nbsp;
          <span
            className={styles.deleteButton}
            onClick={this.delete}>
            x
          </span>
        </li>
    );
  }
};

export default RecordComponent;
