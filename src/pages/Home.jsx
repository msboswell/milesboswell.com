import React from 'react';
import { Button, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typical from 'react-typical';
import Background from '../assets/home-bg.jpg';
import { ArrowDownwardRounded } from '@material-ui/icons';

const useStyles = makeStyles({
  bg: {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll',
    backgroundSize: 'cover',
    margin: '-2rem',
    marginTop: '-5rem',
    minHeight: '100vh',
    zIndex: '1',
    alignContent: 'center',
    boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, .3)',
  },
  container: {
    paddingLeft: '4rem',
    paddingTop: '12rem',
    color: 'white',
    fontWeight: 'normal',
    textAlign: 'center',
  },
  title: {
    fontSize: '6rem',
  },
  subtitle: {
    fontSize: '1.8rem',
    margin: '1rem',
  },
});

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.bg}>
      <Container className={classes.container}>
        <Typography className={classes.title} variant="h4">
          Miles Boswell
        </Typography>
        <Typography className={classes.subtitle} variant="h5">
          I'm a {' '}
          <Typical
            loop={Infinity}
            wrapper="span"
            steps={[
              "Developer",
              2000,
              "",
              100,
              "Musician",
              2000,
              "",
              100,
              "Problem Solver",
              2000
            ]}
          />
        </Typography>
        <Button variant="contained" color="secondary" size="large" href="#">
          Check me out{'\t'}
          <ArrowDownwardRounded />
        </Button>
      </Container>
    </div>
  );
};
