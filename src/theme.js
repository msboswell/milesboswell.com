import { createMuiTheme } from '@material-ui/core/styles';

const general = createMuiTheme({
	palette: {
		primary: {
			light: '#212121',
			dark: '#212121',
			main: '#212121',
			contrastText: '#fff'
		},
		secondary: {
			light: '#bce7e5',
			dark: '#0c4744',
			main: '#20b2aa',
			contrastText: '#fff'
		}
	},
	typography: {
		fontFamily: ['Poppins', 'Roboto', 'sans-serif']
	}
});

export default general;
