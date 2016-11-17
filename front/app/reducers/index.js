import { combineReducers } from 'redux';
import records from '_app/reducers/records';

const rootReducer = combineReducers({
  records,
});

export default rootReducer;
