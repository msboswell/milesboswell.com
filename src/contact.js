import React from 'react';
import {
	FormControl,
	InputLabel,
	Input,
	Button,
	Typography
} from '@material-ui/core';

export default () => {
	return (
		<div style={{
			display: 'flex',
			jusitfyContent: 'center',
		}}>
			<form style={{ width: '50%'}}>
				<Typography variant="h4" color="inherit">Contact Form</Typography>

				<FormControl margin="normal" fullWidth>
					<InputLabel htmlFor="name">Name</InputLabel>
					<Input id="name" type="text" />
				</FormControl>

				<FormControl margin="normal" fullWidth>
					<InputLabel htmlFor="email">Email</InputLabel>
					<Input id="email" type="email" />
				</FormControl>

				<FormControl margin="normal" fullWidth>
					<InputLabel htmlFor="message">Message</InputLabel>
					<Input id="message" multiline rows={5} />
				</FormControl>

				<Button style={{ width: '20%' }} variant="contained" color="primary" size="medium">
					Send
				</Button>

			</form>
		</div>
	);
}
