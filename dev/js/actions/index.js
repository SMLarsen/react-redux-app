/*jshint esversion: 6 */
import * as types from '../constants/ActionTypes';

export const selectTodo = (todo) => ({ type: types.SELECT_TODO, payload: todo });
export const toggleTodo = (id) => ({ type: types.TOGGLE_TODO, payload: id });
export const addTodo = (todo) => ({ type: types.ADD_TODO, payload: todo });
