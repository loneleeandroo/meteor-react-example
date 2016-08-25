import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import { Tasks, addTask, updateTask, deleteTask } from '../../api/tasks';
import { openDialog, closeDialog } from '../../redux/dialog';

import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import TaskList from './TaskList';
import TaskForm from './TaskForm';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const App = ({
  title, showMenuIconButton,
  tasks, addTask, updateTask, deleteTask,
  dialog, handleDialogClose, handleDialogOpen,
}) => {
  const openTaskForm = (event) => {
    handleDialogOpen({
      title: "Add Todo",
      actions: [
        <FlatButton
          label="Cancel"
          primary={false}
          onTouchTap={handleDialogClose}
        />,
        <FlatButton
          label="Add"
          primary={true}
          onTouchTap={handleDialogClose}
        />,
      ],
      children: (
        <TaskForm handleSubmit={addTask} />
      ),
    });
  };

  return (
    <div>
      <AppBar title={title} showMenuIconButton={showMenuIconButton} />
      <TaskList
        items={tasks}
        handleChecked={updateTask}
        handleDelete={deleteTask}
      />
      <Dialog
        {...dialog}
        onRequestClose={handleDialogClose}
      />
      <FloatingActionButton className="fixed__bottom-right" secondary={true} onClick={openTaskForm}>
        <ContentAdd />
      </FloatingActionButton>
    </div>
  )
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  showMenuIconButton: PropTypes.bool,
  tasks: PropTypes.array.isRequired,
  addTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  dialog: PropTypes.object.isRequired,
  handleDialogOpen: PropTypes.func.isRequired,
  handleDialogClose: PropTypes.func.isRequired,
};

App.defaultProps = {
  title: "Todo List",
  showMenuIconButton: false,
  tasks: [],
  addTask: null,
  updateTask: null,
  deleteTask: null,
  dialog: {},
  handleDialogOpen: null,
  handleDialogClose: null,
};

const mapStateToProps = ({ dialog }, ownProps) => ({
  dialog
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleDialogOpen: (options) => dispatch(openDialog(options)),
  handleDialogClose: () => dispatch(closeDialog()),
});

export default createContainer(() => ({
  tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
  addTask,
  updateTask,
  deleteTask,
}), connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
