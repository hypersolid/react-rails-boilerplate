const initialState = [
];

function recordsReducer(state = initialState, action) {
  switch (action.type) {
    case 'OLOLO_FULFILLED':
      return [{id: 1, message: action.payload}];
    default:
      return state;
  }
}

export default recordsReducer;
