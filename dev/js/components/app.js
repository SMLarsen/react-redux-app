/*jshint esversion: 6 */
import React from 'react';
import TodoList from '../containers/todo-list';
import TodoDetail from '../containers/todo-detail';
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>Todo List</h2>
        <TodoList />
        <hr />
        <h2>Todo Details</h2>
        <TodoDetail />
    </div>
);

export default App;
