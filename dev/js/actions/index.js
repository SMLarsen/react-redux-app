/*jshint esversion: 6 */
const TODO_SELECTED = 'TODO_SELECTED';
const TOGGLE_TODO = 'TOGGLE_TODO';
const ADD_TODO = 'ADD_TODO';
const FILTER_TODO_LIST = 'FILTER_TODO_LIST';


export const selectTodo = (todo) => {
  console.log(todo);
  return {
    type: TODO_SELECTED,
    payload: todo
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id
  };
};

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const filterTodoList = (visibilityFilter) => {
  return {
    type: FILTER_TODO_LIST,
    payload: visibilityFilter
  };
};
