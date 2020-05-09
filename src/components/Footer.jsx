import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  footer: {
    position: 'absolute',
    bottom: '-10rem',
    minWidth: '100%',
    height: '10rem',
    padding: '4rem 12rem',
    backgroundColor: '#252525',
    color: 'white',
  },
  section: {},
});

const Section = ({ title, children }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} className={classes.section}>
      <Typography variant="h6">{title}</Typography>
      {children}
    </Grid>
  );
};

export default () => {
  const classes = useStyles();
  return (
    <Container className={classes.footer}>
      <Grid container spacing={3}>
        <Section title="Coming Soon"></Section>
        <Section title="Services"></Section>
        <Section title="Footer Header"></Section>
      </Grid>
    </Container>
  );
};
