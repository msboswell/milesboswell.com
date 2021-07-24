import React from 'react';
import { Container, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { GitHub, LinkedIn, Mail } from '@material-ui/icons';

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    bottom: '-15rem',
    minWidth: '100%',
    height: '15rem',
    padding: '4rem 12rem',
    backgroundColor: '#252525',
    color: 'white',
  },
  grid: {
    justifyContent: 'center',
    border: '2px dashed red',
  },
  socialIcons: {
    justifyContent: 'center',
    paddingLeft: "1rem",
    width: '30%'
  },
  madeByMeText: {
    paddingTop: "1rem"
  },
  coolThingsText: {
    paddingBottom: "1.5rem"
  }
});

const SocialGridItem = ({ title, href, children }) => {
  return (
    <Grid container item xs={12} sm={8} md={3}>
      <Link color="inherit" href={href} target="_blank">
        {children}
      </Link>
    </Grid>
  );
};

export default () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} align="center">
      <Typography variant="h5" className={classes.coolThingsText}>I make cool things.</Typography>

      <Grid container className={classes.socialIcons}>
        <SocialGridItem href="https://github.com/msboswell">
          <GitHub fontSize="large" />
        </SocialGridItem>
        <SocialGridItem href="https://www.linkedin.com/in/miles-sebasti%C3%A1n-boswell/">
          <LinkedIn fontSize="large" />
        </SocialGridItem>
        <SocialGridItem href="mailto: milesboz@me.com">
          <Mail fontSize="large" />
        </SocialGridItem>
      </Grid>

      <Typography className={classes.madeByMeText}>Handcrafted by me, built with {' '}
        <Link color="secondary" href="https://reactjs.org/" target="_blank">React</Link>
      </Typography>
    </Container>
  );
};
