/*jshint esversion: 6 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const items = [
  <MenuItem key={1} value={1} primaryText="Never" />,
  <MenuItem key={2} value={2} primaryText="Every Night" />,
  <MenuItem key={3} value={3} primaryText="Weeknights" />,
  <MenuItem key={4} value={4} primaryText="Weekends" />,
  <MenuItem key={5} value={5} primaryText="Weekly" />,
];

class TodoListFilter extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: null,
    };
  }

  handleChange() {
    this.setState({
      open: true,
    });
  }


  // handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <br />
        <SelectField
          value={this.state.value}
          onChange={this.handleChange}
          floatingLabelText="Filter Todos"
        >
          {items}
        </SelectField>
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
