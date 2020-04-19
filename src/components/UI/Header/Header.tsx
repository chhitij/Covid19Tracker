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
} from '@material-ui/core';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';
import Brightness7OutlinedIcon from '@material-ui/icons/Brightness7Outlined';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const { changeTheme } = props;
  const classes = useStyles();
  return (
    <AppBar position="absolute">
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          Covid19Tracker
        </Typography>
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
