'use strict';

import styles from '_app/components/pages/index/styles';

import React, { Component } from 'react';
import RecordComponent from '_app/components/items/record';
import NewRecordComponent from '_app/components/items/record/new';
import fetchRecords from '_app/actions/index';
import { connect } from 'react-redux';

const IndexPageComponent = class IndexPageComponent extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    records: React.PropTypes.array
  }
  static defaultProps: {
    records: []
  };
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchRecords());
  }
  render() {
    const { records, dispatch } = this.props;
    return (
      <div className={styles.page}>
        <h2>Index page</h2>

        <h2>Records:</h2>
        <ul>
        {
          records.map(
            (record) => <RecordComponent
                          dispatch={dispatch}
                          id={record.id}
                          key={record.id}
                          title={record.title}/>
          )
        }
        </ul>
        <NewRecordComponent
          dispatch={dispatch}/>
      </div>
    );
  }
};

const mapStoreToProps = store => {
  return store;
};

export default connect(mapStoreToProps)(IndexPageComponent);
