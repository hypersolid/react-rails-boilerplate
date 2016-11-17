const initialRecordsStore = [];

function recordsReducer(store = initialRecordsStore, action) {
  switch (action.type) {
    case 'LIST_RECORDS_FULFILLED':
      return action.payload.records;
    case 'UPDATE_RECORD_FULFILLED':
      let newRecord = action.payload;
      return store.map((record) => {
        return record.id === newRecord.id ? newRecord : record;
      });
    default:
  }
  return store;
}

export default recordsReducer;
