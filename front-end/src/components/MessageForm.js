import React from "react";
import { makeStyles, withStyles} from "@material-ui/core/styles";
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Paper from '@material-ui/core/Paper';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import TextField from "@material-ui/core/TextField";
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CodeIcon from "@material-ui/icons/Code";
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
      },
  paper: {
    display: 'flex',
    border: `1px solid ${theme.palette.divider}`,
    flexWrap: 'wrap',
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "65ch"
    }
  }
}));
const StyledToggleButtonGroup = withStyles((theme) => ({
  grouped: {
    margin: theme.spacing(0.5),
    border: 'none',
    '&:not(:first-child)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-child': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}))(ToggleButtonGroup);

export default function MessageForm() {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const [formats, setFormats] = React.useState(() => ['italic']);
  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };


  const tempName = "to Steve";

  return (
    <form className={classes.root} autoComplete="off">
      
       <Paper elevation={0} className={classes.paper}>
       <TextField
        id="outlined-multiline-static"
        label={`Message ${tempName}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        multiline
        fullWidth
        rows={2}
        variant="outlined"
      />      
      <Button
            variant="contained"
             color="primary"
             className={classes.button}
        >
        Send   <SendIcon/>   
      </Button>
      
      </Paper>
      <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
          <span>  </span>
          <span>  </span>
          <ToggleButton value="emoji" aria-label="emoji">
            <EmojiEmotionsIcon />
          </ToggleButton><ToggleButton value="code" aria-label="code">
            <CodeIcon />
          </ToggleButton>
          <ToggleButton value="image" aria-label="image" >
            <AttachFileIcon />
          </ToggleButton> 
        </StyledToggleButtonGroup>
    </form>
  );
}


