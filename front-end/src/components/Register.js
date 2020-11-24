import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import * as yup from "yup";
import schema from "../utils/schema.js";
import fireApp from '../base'
import {useHistory} from 'react-router-dom'

const defaultValues = {
  email: "",
  password: "",

};

const defaultErrors = {
  email: "",
  password: "",
 
};

const Register = () => {
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

  const onSubmit = async (evt) => {
    evt.preventDefault();
    const {email,password} = values
    try
    {
      await fireApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      history.push('/chatroom')
    }
    catch(error){
      alert(error)
    }
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
      
      />
     <Button type="submit" variant="outlined" size="small" fullWidth >
        Submit
      </Button>
    </form>
  );
};

export default Register;
