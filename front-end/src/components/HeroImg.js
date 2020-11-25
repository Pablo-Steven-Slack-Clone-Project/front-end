import React from "react";
import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import bgImg from "../images/logo1.png";

const Img = withStyles({
  root: {
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "90%",
    width: "50%",
    height: "100vh"
  }
})(Box);

const HeroImg = () => <Img />;

export default HeroImg;
