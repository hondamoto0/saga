import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  color: {
    primary: '#D32F2F',
    secondary: '#448AFF',
    error: '#E64A19',
  },
  typography: {
    fontFamily: 'Roboto',
    button: {
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 4,
    background: '#7C4DFF',
    textColor: '#FFFFFF',
    border: '#CCCCCC',
  },
});

export default theme;
