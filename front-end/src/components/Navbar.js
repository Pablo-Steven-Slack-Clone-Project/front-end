import React from "react";
import {Link, useHistory} from 'react-router-dom'

import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"
import { Container } from "@material-ui/core"

import CodeIcon from "@material-ui/icons/Code";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import fireApp from '../base'

const auth = fireApp.auth()

const useStyles = makeStyles({  
    navHomeFlex: {
        display: `flex`,
        justifyContent: `space-around`,
      },
      linkText: {
      textDecoration: `none`,
      color: `white`
    },
    appBarClass:{
      backgroundColor:'#3d9630',
      position: "relative",
      width: `calc(100% - 240px)`,
    }
  });

const navBarLinks = [
  { title: "Current Channel", path: "/homepage" },
];

const NavBar = () => {
    const history = useHistory()
    const classes = useStyles()
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
      
        <IconButton color="inherit" className={classes.linkText}>
            <ExitToAppIcon fontSize="medium" onClick={() =>{
              auth.signOut()
              console.log(auth)
              history.push('/')
            }
            }/>
                        {/* Add logut text and account logo here */}
        </IconButton>
        
        </Container>
        </Toolbar>
    </AppBar>
    </>
  );
};

export default NavBar;
