import React, { Component, PropTypes } from 'react';
import { grey400, red400 } from 'material-ui/styles/colors';

import { ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Checkbox from 'material-ui/Checkbox';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

const handleChecked = (id, onChecked) => (event) => {
  const checkbox = event.target;
  return onChecked && onChecked(id, {
    checked: checkbox.checked,
  });
};

const handleDelete = (id, onDelete) => () => {
  return onDelete && onDelete(id);
};

const TaskItem = ({ _id, text, checked, createdAt, onChecked, onDelete }) => (
  <ListItem
    primaryText={text}
    leftCheckbox={
      <Checkbox onCheck={handleChecked(_id, onChecked)} checked={checked} />
    }
    rightIconButton={
      <IconButton onClick={handleDelete(_id, onDelete)}>
        <DeleteIcon color={grey400} hoverColor={red400} />
      </IconButton>
    }
  />
);

TaskItem.propTypes = {
  _id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChecked: PropTypes.func,
  onDelete: PropTypes.func,
};

TaskItem.defaultProps = {
  _id: "",
  text: "",
  checked: false,
  onChecked: null,
  onDelete: null,
};

export default TaskItem;
