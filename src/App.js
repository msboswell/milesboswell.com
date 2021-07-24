import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './pages/Contact';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';
import Posts from './pages/Posts';
import general from './theme.js';
import About from './pages/About';

const useStyles = makeStyles({
  pageContainer: {
    position: 'relative',
    minHeight: '100vh',
  },
  container: {
    padding: '2rem',
    minHeight: '100%',
  },
});

export default () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={general}>
      <div className={classes.pageContainer}>
        <Header />
        <Container maxWidth="xl" className={classes.container}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/posts/" component={Posts} />
            <Route path="/contact/" component={Contact} />
            <Route path="/login/" component={Login} />
            <Route component={PageNotFound} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
