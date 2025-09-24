import { createTheme } from '@mui/material/styles';
import { teal, pink } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: pink[500],
    },

    background: {
      default: '#f4f6f8',
    },
  },
  typography: {
    fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
});

export default theme;