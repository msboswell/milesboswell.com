import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
  Container,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  form: {
    width: "50%",
  },
  submitButton: {
    width: "40%",
  },
});

export default () => {
  const classes = useStyles();
  const [state] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div align="center">
      <Container>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Typography variant="h4" color="inherit">
            Login
          </Typography>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input id="username" type="text" />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input id="password" type="password" />
          </FormControl>

          <Button
            className={classes.submitButton}
            variant="contained"
            color="primary"
            size="medium"
            type="submit"
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
};
