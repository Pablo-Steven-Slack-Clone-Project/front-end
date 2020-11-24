import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    mainChatContainer: {
        position: "relative",
        border: "0.5px solid black",
        paddingBottom: "20%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    },
     bubbleContainer: {
        width: "100%",
        display: "flex",
        margin: "0 auto",
        
    },
    bubble: {
        // border: "0.5px solid black",
        // borderRadius: "10px",
        margin: "1px",
        padding: "10px",
        display: "inline-block"
    }
}));
const MainChat = () => {
  const classes = useStyles();
  const dummyData = [
    {
        user: "Steven",
        message: "Someone please hire me",
    },
    {
        user: "Pablo",
        message: "Not with Lambda as your background",
    },
    {
        user: "Steven",
        message: "So true!",
    },
    {
        user: "Austen",
        message: "LMAO I'M RICH!",
    }
  ];

  const chatBubbles = dummyData.map((obj, i = 0) => (
    <div className={`${classes.bubbleContainer}`} key={i}>
      <div key={i++} className={classes.bubble}>
        <div className={classes.button}>{obj.user}:<br />{obj.message}</div>
      </div>
    </div>
  ));
  return (
    <div className={classes.mainChatContainer}>
        {chatBubbles}
    </div>
  )
};

export default MainChat;