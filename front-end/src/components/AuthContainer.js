import React from "react";
import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
// import Register from "./Register.js";
import FormTabs from "./FormTabs";

const FormWrapper = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: "100vh",
    background: "#5362ed"
  }
})(Box);

const AuthContainer = () => {
  return (
    <FormWrapper>
      <h1>Slack Clone</h1>
      <FormTabs />
    </FormWrapper>
  );
};

export default AuthContainer;

// #3b2875
