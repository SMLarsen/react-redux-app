/*jshint esversion: 6 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

class TodoListFilter extends Component {

  render() {
    return(
      <div>
      <h1>Filtering goes here</h1>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    visibilityFilter: state.visibilityFilter
  };
}

export default connect(mapStateToProps)(TodoListFilter);
