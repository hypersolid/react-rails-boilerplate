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
    case 'CREATE_RECORD_FULFILLED':
      let result = store.slice();
      result.push(action.payload);
      return result;
    case 'DELETE_RECORD_FULFILLED':
      return store.filter((record) => {
        return record.id !== action.payload;
      });
    default:
  }
  return store;
}

export default recordsReducer;
