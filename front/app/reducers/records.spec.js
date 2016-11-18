import recordsReducer from './records';

test('creates record', () => {
  let action = {
    type: 'CREATE_RECORD_FULFILLED',
    payload: {id: 1, title: 'test'}
  };
  let state = [];
  expect(recordsReducer(state, action)).toEqual([action.payload]);
});


test('updates record', () => {
  let action = {
    type: 'UPDATE_RECORD_FULFILLED',
    payload: {id: 2, title: 'new-title'}
  };
  let state = [
    {id: 1, title: 'test1'},
    {id: 2, title: 'test2'}
  ];
  expect(recordsReducer(state, action)).toEqual([
    {id: 1, title: 'test1'},
    {id: 2, title: 'new-title'}
  ]);
});

test('deletes record', () => {
  let action = {
    type: 'DELETE_RECORD_FULFILLED',
    payload: 1
  };
  let state = [
    {id: 1, title: 'test1'},
    {id: 2, title: 'test2'}
  ];
  expect(recordsReducer(state, action)).toEqual([
    {id: 2, title: 'test2'}
  ]);
});
