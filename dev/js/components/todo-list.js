/*jshint esversion: 6 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectTodo} from '../actions/index';

class todoList extends Component {

  createListItems() {
    console.log('this.props.todos:', this.props.todos.todos);

    return this.props.todos.todos.map((todo) => {
      return (
        <li
          key={todo.id}
          onClick={() => this.props.selectTodo(todo)}
        >
          {todo.name}
        </li>
      )
    })
  }

  render() {
    return(
      <ul>
        {this.createListItems()}
      </ul>
    );
  }

}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectTodo: selectTodo}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(todoList);
