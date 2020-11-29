import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField"
import fireApp from '../base.js'
const firestore = fireApp.firestore();


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
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ChannelBar = () => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [formVal, setFormVal] = useState({name: ""});
  const [open, setOpen] = useState(false);
  const [newChannel, setNewChannel] = useState()
  const channelsRef = firestore.collection('channels')

  const handleOpen = (e) => {
    setOpen(true)
    console.log("Open sesame")
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('this is the data:', formVal)
    setOpen(false)
    setNewChannel(formVal)
    console.log("NEW CHANNEL", newChannel)

    await channelsRef.doc(formVal.name).set(formVal)
    .then(res =>  channelsRef.doc(formVal.name).collection('messages'))

    setFormVal({name: ''})
    }

    const handleChanges = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormVal({
            ...formVal,
            [name]: value,
          });
          console.log(formVal)
    }

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
            Channels <AddIcon color="black" fontSize="medium" onClick={handleOpen}/>
        </Typography>
        <Modal open={open} onClose={handleClose}>
            <div style={modalStyle} className={classes.paper}>
            <form onSubmit={handleSubmit}>
            <div>
            <TextField
                name="name"
                onChange={handleChanges}
                value={formVal.name}
                id="outlined-basic"
                variant="outlined"
                label="Channel Name"
                /> <br /> <br />
            </div>
            <button type="submit" >
                Submit
            </button>
            </form>
            </div>
		    </Modal>
        <List>
          {['For the Horde', 'LOFR Stuff', 'Steves House', 'Pablos Den'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}

function getModalStyle() {
  const top = 50 + Math.round(Math.random() * 20) - 10;
  const left = 50 + Math.round(Math.random() * 20) - 10;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export default ChannelBar;

