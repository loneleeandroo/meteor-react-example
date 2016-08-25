import React, { Component, PropTypes } from 'react';
import Form from './Form';
import TextField from 'material-ui/TextField';

const TaskForm = ({ children, handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <TextField name="text" fullWidth={true} hintText="Type the name of the task and press enter for now" />
  </Form>
);

TaskForm.propTypes = {
  handleSubmit: PropTypes.func,
};

TaskForm.defaultProps = {
  handleSubmit: (formData) => console.info(formData),
};

export default TaskForm;
