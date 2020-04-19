import React from 'react';
import Container from '@material-ui/core/Container';
import Layout from './components/Layout/Layout';
// import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import C19Tracker from './containers/C19Tracker/C19Tracker';
import classes from './App.module.css';
import { Paper, ThemeProvider, createMuiTheme, Theme } from '@material-ui/core';
import useDarkMode from './theme';

declare type darkMode = {
  palette: any;
};

const App = () => {
  const [theme, toggleDarkMode] = useDarkMode();
  const themeConfig = createMuiTheme(theme as Theme);
  const setThemeMode = () => {
    toggleDarkMode();
  };
  return (
    <ThemeProvider theme={themeConfig}>
      <Paper className={classes.AppHeight}>
        <Container className={classes.App}>
          <Layout changeTheme={setThemeMode}>
            <Typography align="center" variant="h5">
              <C19Tracker />
            </Typography>
          </Layout>
        </Container>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
