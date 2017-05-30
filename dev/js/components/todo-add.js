/*jshint esversion: 6 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addTodo} from '../actions/index';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

const style = {
  marginRight: 20,
  position: "absolute",
  bottom: 30,
  right: 30,
  transform: "translate(0%, 0%)"
};

class todoAdd extends Component {

  constructor(props, context) {
    super(props, context);
    this.props.open = false;
    console.log('open:', this.props.open);
  }

  handleOpen() {
    open = true;
  }

  handleClose() {
    open = false;
  }

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <FloatingActionButton style={style} onTouchTap={this.handleOpen}>
          <ContentAdd />
        </FloatingActionButton>
        <Dialog
          title="Add Todo"
          actions={actions}
          modal={false}
          open={false}
          onRequestClose={this.handleClose}
        >
          <DatePicker hintText="Due Date" />
        </Dialog>
      </div>
    );
  }
  }

function mapStateToProps(state) {
  return {
    todo: state.todo
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addTodo: addTodo}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(todoAdd);
