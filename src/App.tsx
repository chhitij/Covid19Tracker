import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Layout from './components/Layout/Layout';
// import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import C19Tracker from './containers/C19Tracker/C19Tracker';
import classes from './App.module.css';
import {
  Paper,
  ThemeProvider,
  createMuiTheme,
  Theme,
  Grid,
} from '@material-ui/core';
import useDarkMode from './theme';
import topHeaderWave from '../src/assests/images/topHeader.svg';
declare type darkMode = {
  palette: any;
};

const App = () => {
  const [theme, toggleDarkMode] = useDarkMode();
  const [worldMap, setWorldMap] = useState(false);
  const themeConfig = createMuiTheme(theme as Theme);
  const setThemeMode = () => {
    toggleDarkMode();
  };
  const setIsWorldOption = (nav: string) => {
    if (nav === 'home') {
      setWorldMap(false);
    } else if (nav === 'world') {
      setWorldMap(true);
    }
  };
  return (
    <ThemeProvider theme={themeConfig}>
      <Paper className={classes.AppHeight}>
        <Container className={classes.App}>
          <Layout changeTheme={setThemeMode} isWorldOption={setIsWorldOption}>
            <C19Tracker isWorldOption={worldMap} />
          </Layout>
        </Container>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
