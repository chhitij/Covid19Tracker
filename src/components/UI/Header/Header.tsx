import React from 'react';
import {
  Toolbar,
  Typography,
  AppBar,
  makeStyles,
  Theme,
  IconButton,
  Switch,
  Tooltip,
  Grid,
} from '@material-ui/core';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';
import Brightness7OutlinedIcon from '@material-ui/icons/Brightness7Outlined';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24,
  },
  title: {
    flexGrow: 0.1,
    cursor: 'pointer',
  },
  nav: {
    flexGrow: 1,
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
  },
  navItem: {
    cursor: 'pointer',
  },
}));

const Header = (props) => {
  const { changeTheme, isWorldOption } = props;
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
          onClick={() => isWorldOption('home')}
        >
          Covid19Tracker
        </Typography>
        <Grid className={classes.nav}>
          <Grid
            className={classes.navItem}
            onClick={() => isWorldOption('world')}
          >
            WorldMap{' '}
          </Grid>
        </Grid>
        <IconButton color="inherit">
          <Tooltip title="DayMode">
            <IconButton aria-label="day-mode" color="inherit">
              <Brightness4OutlinedIcon />
            </IconButton>
          </Tooltip>

          <Switch
            onChange={() => changeTheme()}
            color="secondary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <Tooltip title="NightMode">
            <IconButton aria-label="night-mode" color="inherit">
              <Brightness7OutlinedIcon />
            </IconButton>
          </Tooltip>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
