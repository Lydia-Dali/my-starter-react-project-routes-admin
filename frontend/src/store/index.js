import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import allReducer from './reducers';


export default createStore(
  allReducer,
  applyMiddleware(thunk, logger)
);