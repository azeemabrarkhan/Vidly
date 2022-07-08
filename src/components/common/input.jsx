import React, { Component } from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input {...rest} id={name} name={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;

//DIRECT:  name={name}, label={label}, error={errors[name]}
//REST:  type={type}, autoFocus={autoFocus}, value={data[name]}, onChange={this.handleChange}
