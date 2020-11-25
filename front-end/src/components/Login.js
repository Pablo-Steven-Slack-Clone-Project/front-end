import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles, styled } from "@material-ui/core/styles";
import * as yup from "yup";
import schema from "../utils/schema.js";
import {useHistory} from 'react-router-dom'
import fireApp from '../base'

const useStyles = makeStyles({
    root: {
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "white"
      },
      "& .MuiOutlinedInput-input": {
        color: "white"
      },
      "& .MuiInputLabel-outlined": {
        color: "white"
      },
    }
  });

  const StyledButton = styled(Button)({
    color: "white",
    borderColor: "white",
    width: "100%",
    size: 'small'
  });

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

   const classes = useStyles()

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
        className={classes.root}
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
        className={classes.root}
      />
      <StyledButton type="submit" variant="outlined" >
        Sign In
      </StyledButton>
    </form>
  );
};

export default Login;

// style={{ borderColor: 'white', color:'white'}}