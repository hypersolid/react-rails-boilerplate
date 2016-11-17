const initialState = [
];

function recordsReducer(state = initialState, action) {
  switch (action.type) {
    case 'OLOLO_FULFILLED':
      return action.payload.records;
    default:
      return state;
  }
}

export default recordsReducer;
