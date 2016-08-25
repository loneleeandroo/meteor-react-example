import React, { Component, PropTypes } from 'react';

import { List } from 'material-ui/List';
import TaskItem from './TaskItem';

const TaskList = ({ items, handleChecked, handleDelete }) => (
  <List>
    {items.map((item) => (
      <TaskItem key={item._id} onChecked={handleChecked} onDelete={handleDelete} {...item} />
    ))}
  </List>
);

TaskList.propTypes = {
  items: PropTypes.array.isRequired,
  handleChecked: PropTypes.func,
  handleDelete: PropTypes.func,
};

TaskList.defaultProps = {
  items: [],
  handleChecked: null,
  handleDelete: null,
};

export default TaskList;
