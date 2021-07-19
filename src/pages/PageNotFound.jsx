import React from 'react';
import { Typography, Container } from '@material-ui/core';

export default () => {
  return (
    <Container>
      <Typography variant="h2" color="inherit">
        404
      </Typography>
      <Typography variant="h4" color="inherit">
        Sorry, that page could not be found.
      </Typography>
    </Container>
  );
};
