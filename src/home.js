import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Background from './assets/home-bg.jpg';

const useStyles = makeStyles({
	bg: {
		backgroundImage: `url(${Background}) !important`,
		backgroundCover: 'cover !important',
		zIndex: '1'
	}
});

export default () => {
	const classes = useStyles();
	return (
		<div className={classes.bg}>
			<Typography variant="h5">Home</Typography>
		</div>
	);
}
