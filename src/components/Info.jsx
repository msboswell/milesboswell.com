import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles({
  info: {
    marginBottom: '2rem',
  },
});

export default ({ title, children }) => {
  const classes = useStyles();
  return (
    <Alert severity="info" className={classes.info}>
      <AlertTitle>{title}</AlertTitle>
      {children}
    </Alert>
  );
};
