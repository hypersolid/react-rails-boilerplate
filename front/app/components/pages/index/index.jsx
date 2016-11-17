'use strict';

import React, { Component } from 'react';
import RecordComponent from '_app/components/items/record';
import { connect } from 'react-redux';

const IndexPageComponent = class IndexPageComponent extends Component {
  static propTypes = {
    records: React.PropTypes.array,
    dispatch: React.PropTypes.func
  }
  render() {
    const { records, dispatch } = this.props;
    return (
      <div>
        <h2>Index page</h2>

        <h2>Records:</h2>
        <ul>
        {records.map((record) => <RecordComponent key={record.id} id={record.id} title={record.title} dispatch={dispatch}/>)}
        </ul>
      </div>
    );
  }
};

export default connect(state => ({ records: state.records }))(IndexPageComponent);
