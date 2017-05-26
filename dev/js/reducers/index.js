/*jshint esversion: 6 */
import {combineReducers} from 'redux';
import TodoReducer from './reducer-todos';
import ActiveTodoReducer from './reducer-active-todo';
import visibilityFilterReducer from './reducer-filter';

const allReducers = combineReducers({
  todos: TodoReducer,
  activeTodo: ActiveTodoReducer,
  visibilityFilter: visibilityFilterReducer
});

export default allReducers;
