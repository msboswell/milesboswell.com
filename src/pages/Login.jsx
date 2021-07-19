import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
  Container,
} from '@material-ui/core';

export default () => {
  const [state] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div align="center">
      <Container>
        <form style={{ width: '50%' }} onSubmit={handleSubmit}>
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
            style={{ width: '40%' }}
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
