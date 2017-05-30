/*jshint esversion: 6 */
import React from 'react';
import TodoList from '../components/todo-list';
import TodoDetail from '../components/todo-detail';
import TodoListFilter from '../components/todo-list-filter';
import TodoAdd from '../components/todo-add';
require('../../scss/style.scss');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
    <MuiThemeProvider>
      <div>
          <h2>Todo List</h2>
          <TodoList />
          <TodoListFilter />
          <hr />
          <h2>Todo Details</h2>
          <TodoDetail />
          <TodoAdd />
      </div>
    </MuiThemeProvider>
);

export default App;
