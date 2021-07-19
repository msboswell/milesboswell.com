import React from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
  makeStyles,
} from '@material-ui/core';
import Info from '../components/Info';

const useStyles = makeStyles({
  contentArea: {
    display: 'flex',
    jusitfyContent: 'center',
  },
  contentForm: {
    width: '50%'
  },
  sendButton: {
    width: '20%'
  },
});

export default () => {
  const classes = useStyles();

  return (
    <div>
      <Info title={'Example Form'}>
        This page contains an example of a Contact Form that could be used at
        some point in the future. The form below has no functionality and is
        only used for UI reference.
      </Info>
      <div className={classes.contentArea}>
        <form className={classes.contentForm}>
          <Typography variant="h4" color="inherit">
            Contact Form
          </Typography>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input id="name" type="text" />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" type="email" />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="message">Message</InputLabel>
            <Input id="message" multiline rows={5} />
          </FormControl>

          <Button
            className={classes.sendButton}
            variant="contained"
            color="primary"
            size="medium"
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};
