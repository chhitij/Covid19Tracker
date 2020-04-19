import React from 'react';
import { Typography, Link, Box } from '@material-ui/core';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://chhitij.github.io/">
        chhitij.github.io
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};
const footer = () => {
  return (
    <Box pt={4}>
      <Copyright />
    </Box>
  );
};

export default footer;
