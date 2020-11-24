import React from "react";
import {Link} from 'react-router-dom'

import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"
import { Container } from "@material-ui/core"

import CodeIcon from "@material-ui/icons/Code";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import zIndex from "@material-ui/core/styles/zIndex";


const useStyles = makeStyles({  
    navDisplayFlex: {
      display: `flex`,
      justifyContent: `space-evenly`
    },
    navHomeFlex: {
        display: `flex`,
        justifyContent: `space-between`
      },
      linkText: {
      textDecoration: `none`,
      color: `white`
    },
    appBarClass:{
      backgroundColor:'#3d9630',
      position: "relative"
    }
  });

const navBarLinks = [
  { title: "Current Channel", path: "/homepage" },
  { title: "Logout", path: "/logout" },
];

const NavBar = () => {
    const classes = useStyles()
    // const theme = useTheme()
  return (
    <>
    <AppBar  className={classes.appBarClass}>
        <Toolbar>
        <Container className={classes.navHomeFlex}>    
        <IconButton edge="start" color="inherit" aria-label="Homepage">
            H
            <CodeIcon fontSize="medium" />
            me
        </IconButton>

        <Link href={navBarLinks[0].path} key={navBarLinks[0].title} >
            <IconButton color="inherit" className={classes.linkText}>
                <CodeIcon fontSize="medium" />
                {navBarLinks[0].title}
            </IconButton>
        </Link>
      
            <Link href={navBarLinks[1].path} key={navBarLinks[1].title} >
                <IconButton color="inherit" className={classes.linkText}>
                    <ExitToAppIcon fontSize="medium" /> {navBarLinks[1].title} <AccountCircleIcon fontSize="medium" />
                    
                </IconButton>
            </Link>
    
        </Container>
        </Toolbar>
    </AppBar>
    </>
  );
};

export default NavBar;
