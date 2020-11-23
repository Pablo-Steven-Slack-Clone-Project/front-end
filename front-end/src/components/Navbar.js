import React from "react";
import {Link} from 'react-router-dom'

import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"
import { Container } from "@material-ui/core"
import { createMuiTheme } from '@material-ui/core/styles';

import CodeIcon from "@material-ui/icons/Code";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#3d9630',
        contrastText: '#000000',
    }
  },
});



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
    <AppBar position="static">
        <Toolbar>
        <Container className={classes.navHomeFlex}>    
        <IconButton edge="start"color="inherit" aria-label="Homepage">
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
 
        {/* <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex} >
            {navBarLinks.map(({ title, path }) => (
                <Link href={path} key={title} className={classes.linkText}>
                <ListItem button>
                    <ListItemText primary={title} />
                </ListItem>
            </Link>
            ))}
        </List> */}
   
        </Toolbar>
    </AppBar>
    </>
  );
};

export default NavBar;
