import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import * as yup from "yup";
import schema from "../utils/schema.js";
import {useHistory} from 'react-router-dom'
import fireApp from '../base'

const defaultValues = {
  email: "",
  password: ""
};

const defaultErrors = {
  email: "",
  password: ""
};

const Login = () => {
  const history = useHistory()

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
        setErrors({ ...errors, [name]: err.message });
      });
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    validate(name, value);
    setValues({ ...values, [name]: value });
  };

  const submitLogin = async (evt) => {
        evt.preventDefault();
        const { email, password } = evt.target.elements;
        console.log('event values', evt.target.elements)
        try {
          await fireApp
            .auth()
            .signInWithEmailAndPassword(email.value, password.value);
          history.push("/chatroom");
        } 
        catch (error) {
          alert(error);
        }
      }
    
  return (
    <form onSubmit={submitLogin}>
      <TextField
        name="email"
        label="Email"
        variant="outlined"
        required
        fullWidth
        error={errors.email === "" ? false : true}
        margin="dense"
        onChange={onChange}
        value={values.email}
      />
      <TextField
        type="password"
        name="password"
        label="Password"
        variant="outlined"
        error={errors.password === "" ? false : true}
        required
        fullWidth
        margin="dense"
        onChange={onChange}
        value={values.password}
      />
      <Button type="submit" variant="outlined" size='small' fullWidth>
        Sign In
      </Button>
    </form>
  );
};

export default Login;
