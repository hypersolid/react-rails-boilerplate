'use strict';

import React, { Component } from 'react';
import RecordComponent from '_app/components/items/record';
import { connect } from 'react-redux';

const IndexPageComponent = class IndexPageComponent extends Component {
  static propTypes = {
    records: React.PropTypes.array
  }
  render() {
    const { records } = this.props;
    return (
      <div>
        <h2>Index page</h2>

        <h2>Records:</h2>
        <ul>
        {records.map((record) => <RecordComponent key={record.id} message={record.message} />)}
        </ul>
      </div>
    );
  }
};

;
export default connect(state => ({ records: state.records }))(IndexPageComponent);
