/*jshint esversion: 6 */
import {combineReducers} from 'redux';
import TodoReducer from './reducer-todos';

const allReducers = combineReducers({
  todos: TodoReducer
});

export default allReducers;
