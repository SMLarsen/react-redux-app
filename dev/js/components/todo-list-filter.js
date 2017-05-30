/*jshint esversion: 6 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {filterTodoList} from '../actions/index';

const items = [
  <MenuItem key={1} value={"All"} primaryText="All" />,
  <MenuItem key={2} value={"Pending"} primaryText="Pending" />,
  <MenuItem key={3} value={"Completed"} primaryText="Completed" />,
];

class TodoListFilter extends Component {

  handleChange(event, index, value) {
    this.setState({
      value
    });
  }

  render() {
    return (
      <div>
        <br />
        <SelectField
          // value={this.props.visibilityFilter}
          // onChange={this.props.filterTodoList(this.props.visibilityFilter)}
          floatingLabelText="Filter Todos"
        >
          {items}
        </SelectField>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     visibilityFilter: state.visibilityFilter
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   console.log('mapDispatch:', dispatch);
//   return bindActionCreators({visibilityFilter: 'Some'}, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(filterTodoList);

export default TodoListFilter;
