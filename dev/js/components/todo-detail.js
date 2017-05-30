/*jshint esversion: 6 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

class TodoDetail extends Component {

  render() {
    if (!this.props.todo) {
      return (<h2>Select a todo...</h2>);
    }

    return(
      <div>
        <h4>{this.props.todo.status} - {this.props.todo.name} </h4>
        <p>Date Due: {this.props.todo.dueDate}</p>
        <p>Date Completed: {this.props.todo.doneDate}</p>
        <p>Urgency: {this.props.todo.urgency}</p>
        <p>Importance: {this.props.todo.importance}</p>
        <br />
        <p>Description: {this.props.todo.description}</p>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    todo: state.activeTodo
  };
}

export default connect(mapStateToProps)(TodoDetail);
