import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import * as yup from "yup";
import schema from "../utils/schema.js";

const defaultValues = {
  email: "",
  password: "",
  confirmPassword: ""
};

const defaultErrors = {
  email: "",
  password: "",
  confirmPassword: ""
};

const Register = () => {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState(defaultErrors);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then((valid) => {
        setErrors({ ...errors, [name]: "" });
      })
      .catch((err) => {
        console.log(err);
        setErrors({ ...errors, [name]: err.message });
      });
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    validate(name, value);
    setValues({ ...values, [name]: value });
  };
  const onSubmit = (evt) => {
    evt.preventDefault();
    delete values.confirmPassword;
    console.log(values);
  };
  return (
    <form onSubmit={onSubmit}>
      <TextField
        name="email"
        label="Email"
        variant="outlined"
        required
        fullWidth
        margin="dense"
        onChange={onChange}
        value={values.email}
        style={{maxWidth: "70%", marginLeft: "15%"}}
      />
      <TextField
        type="password"
        name="password"
        label="Password"
        variant="outlined"
        required
        fullWidth
        margin="dense"
        onChange={onChange}
        value={values.password}
        style={{maxWidth: "70%", marginLeft: "15%"}}
      />
      <TextField
        type="password"
        name="confirmPassword"
        label="Confirm Password"
        variant="outlined"
        required
        fullWidth
        margin="dense"
        onChange={onChange}
        value={values.confirmPassword}
        style={{maxWidth: "70%", marginLeft: "15%"}}
      />
      <Button type="submit" variant="outlined" size="small" fullWidth style={{maxWidth: "70%", marginLeft: "15%"}}>
        Submit
      </Button>
    </form>
  );
};

export default Register;
