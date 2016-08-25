import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('tasks');

export const addTask = (data) => Tasks.insert({
  ...data,
  checked: false,
  createdAt: new Date(),
});

export const updateTask = (id, data) => Tasks.update(id, {
  $set: data,
});

export const deleteTask = (id) => Tasks.remove(id);
