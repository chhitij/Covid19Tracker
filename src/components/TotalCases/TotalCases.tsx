import React from 'react';
import Aux from '../hoc/auxillary';
import {
  Grid,
  Paper,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';

import './TotalCases.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.secondary.contrastText,
      whiteSpace: 'nowrap',
      fontSize: '15px',
    },
    totalCase: {
      fontSize: '1em',
      fontWeight: 'bold',
      color: theme.palette.text.secondary,
    },
  })
);
const TotalCases = (props: any) => {
  const { totalData } = props;
  return (
    <Aux>
      <Grid className="banner banner-wt">
        <Grid item className="heading">
          <h2>STAY HOME STAY SAFE</h2>
        </Grid>
      </Grid>
      <Grid className="showCasesGrid" item>
        <Grid item className="confirmed roundCase">
          <Grid item className="itemText">
            <Grid>Confirmed</Grid>
            <Grid>[{totalData.cases.new}]</Grid>
            <Grid>{totalData.cases.total}</Grid>
          </Grid>
        </Grid>
        <Grid item className="active roundCase">
          <Grid item className="itemText">
            <Grid>Active</Grid>
            <Grid>{totalData.cases.active}</Grid>
          </Grid>
        </Grid>
        <Grid item className="recoverd roundCase">
          <Grid item className="itemText">
            <Grid>Recovered</Grid>
            <Grid>{totalData.cases.recovered}</Grid>
          </Grid>
        </Grid>
        <Grid item className="decased roundCase">
          <Grid item className="itemText">
            <Grid>Decased</Grid>
            <Grid>[{totalData.deaths.new}]</Grid>
            <Grid>{totalData.deaths.total}</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Aux>
  );
};

export default TotalCases;
