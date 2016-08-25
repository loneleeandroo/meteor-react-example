import React, { Component, PropTypes } from 'react';

const formData = {};

const validate = () => {
  // TODO: validation on children;
  return true;
};

const handleSubmit = (onSubmit) => (event) => {
  event.preventDefault();
  const form = event.target;
  for(var entry of new FormData(form)) {
    formData[entry[0]] = entry[1];
  };
  if (validate(formData)) {
    form.reset();
    return onSubmit && onSubmit(formData);
  }
  return; // TODO: return form error if invalid
};

const Form = ({ children, onSubmit }) => (
  <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

Form.defaultProps = {
  onSubmit: (formData) => console.info(formData),
};

export default Form;
