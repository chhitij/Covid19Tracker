import { useState } from 'react';
import { red, lightBlue } from '@material-ui/core/colors';

const themeConfigObj = {
  palette: {
    primary: {
      main: '#2364aa',
    },
    secondary: {
      main: '#00e676',
      light: lightBlue[900],
      contrastText: '#fff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
    type: 'light',
  },
};
// A custom theme for this app
//const theme = createMuiTheme({});

const useDarkMode = () => {
  const [theme, setTheme] = useState<any>(themeConfigObj);
  const {
    palette: { type },
  } = theme;
  const toggleDarkMode = () => {
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === 'light' ? 'dark' : 'light',
      },
    };
    setTheme(updatedTheme);
  };
  return [theme, toggleDarkMode];
};

export default useDarkMode;
