import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import reducers from '_app/reducers';
// import createLogger from 'redux-logger';

const store = createStore(reducers, {}, compose(
  applyMiddleware(
    thunkMiddleware,
    promiseMiddleware(),
    // createLogger
  ))
);

export default store;
