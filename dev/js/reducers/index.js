/*jshint esversion: 6 */
import {combineReducers} from 'redux';
import TodoReducer from './reducer-todos';
import ActiveTodoReducer from './reducer-active-todo';

const allReducers = combineReducers({
  todos: TodoReducer,
  activeTodo: ActiveTodoReducer
});

export default allReducers;
