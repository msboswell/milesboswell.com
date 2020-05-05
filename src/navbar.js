import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	header: {
		fontStyle: 'oblique',
		flex: 'none' // change to 1 to push everything else to right
	}
});

const Item = ({ path, children }) => (
	<ListItemText inset>
		<Typography color="inherit" variant="h6">
			<Link color="inherit" href={path}>{ children }</Link>
		</Typography>
	</ListItemText>
);

export default () => {
	const classes = useStyles();

	return (
	<AppBar color="primary" position="static">
		<Toolbar>
			<Link href="/" color="inherit" underline="none" className={classes.header}>
				<Typography variant="h5">
					Miles Boswell
				</Typography>
			</Link>
			<List component="nav">
				<ListItem component="div">
					<Item path="/blog">Blog</Item>
					<Item path="/contact">Contact</Item>
				</ListItem>
			</List>
		</Toolbar>
	</AppBar>
	);
};
