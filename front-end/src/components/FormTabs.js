import React, { useState } from "react";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { Tab } from "@material-ui/core";
import Register from "./Register.js";
import Login from "./Login.js";

const FormTabs = () => {
  const [tab, setTab] = useState("1");

  const onChange = (event, newValue) => {
    setTab(newValue);
  };
  return (
    <>
      <TabContext value={tab}>
        <TabList onChange={onChange}>
          <Tab label="Sign In" value="1" />
          <Tab label="Sign Up" value="2" />
        </TabList>
        <TabPanel value="1">
          <Login />
        </TabPanel>
        <TabPanel value="2">
          <Register />
        </TabPanel>
      </TabContext>
    </>
  );
};

export default FormTabs;
