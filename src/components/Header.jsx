import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Link,
  Typography,
  AppBar,
  Toolbar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GitHub, LinkedIn } from '@material-ui/icons';

const useStyles = makeStyles({
  appBar: {
    paddingTop: '0.75rem'
  },
  header: {
    fontStyle: 'oblique',
    flex: 'none',
  },
  login: {
    position: 'absolute',
    right: '2rem',
  },
});

const Item = ({ path, children }) => (
  <ListItemText inset>
    <Typography color="inherit" variant="h6">
      <Link color="inherit" href={path} target="_blank">
        {children}
      </Link>
    </Typography>
  </ListItemText>
);

export default () => {
  const classes = useStyles();

  return (
    <AppBar color="primary" position="static" className={classes.appBar} >
      <Toolbar>
        <Link
          href="/"
          color="inherit"
          underline="none"
          className={classes.header}
        >
          <Typography variant="h5">Miles Boswell</Typography>
        </Link>
        <Typography color="inherit" variant="h6" className={classes.login}>
          <List component="nav">
            <ListItem component="div">
              <Item path="https://github.com/msboswell">
                <GitHub fontSize="large" />
              </Item>
              <Item path="https://www.linkedin.com/in/miles-sebasti%C3%A1n-boswell/">
                <LinkedIn fontSize="large" />
              </Item>
            </ListItem>
          </List>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
