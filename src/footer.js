import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	footer: {
		position: 'absolute',
		bottom: '-14rem',
		minWidth: '100%',
		height: '14rem',
		padding: '4rem 12rem',
		backgroundColor: '#252525',
		color: 'white'
	}
});

export default () => {
	const classes = useStyles();
	return (
		<Container className={classes.footer}>
			<Typography variant="h5">Footer</Typography>
		</Container>
	);
}