import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    marginLeft: `calc(100% - ${drawerWidth}px)`,
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  wrapIcon: {
    alignItems: 'center',
    fontWeight: "bold",
    fontSize: "1.5rem"
   },
  toolbar: theme.mixins.toolbar,
  content: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const ChannelBar = () => {
  const classes = useStyles();
  //connect redux for global state for channels

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        position="relative"
      >
        <div className={classes.toolbar} />
        <h2>Channel Search</h2>
        <Divider />
        <Typography className={classes.wrapIcon}>
            Channels <AddIcon color="black" fontSize="medium"/>
        </Typography>
        <List>
          {['For the Horde', 'LOFR Stuff', 'Steves House', 'Pablos Den'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <Typography className={classes.wrapIcon}>
            Direct Messages <AddIcon color="black" fontSize="medium"/>
        </Typography>
        <List>
          {['Steve', 'Pablo', 'Buddy'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default ChannelBar;