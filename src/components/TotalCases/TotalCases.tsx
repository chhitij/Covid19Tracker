import React from 'react';
import Aux from '../hoc/auxillary';
import {
  Grid,
  Paper,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  Divider,
} from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.secondary.contrastText,
      whiteSpace: 'nowrap',
      fontSize: '15px',
    },
    divider: {},
    totalCase: {
      fontSize: '1em',
      fontWeight: 'bold',
      color: theme.palette.text.secondary,
    },
    headerBold: {
      fontWeight: 'bold',
    },
    recovred: {
      background: theme.palette.secondary.main,
    },
    danger: {
      background: theme.palette.primary.main,
    },
    active: {
      background: '#f57c00',
    },
    critical: {
      background: theme.palette.error.main,
    },
    totalCasePercFont: {
      fontSize: '14px',
    },
  })
);
const TotalCases = (props: any) => {
  const { totalData } = props;
  const classes = useStyles();
  const showTotalCase = clsx(classes.paper, classes.totalCase);
  const recovered = clsx(classes.paper, classes.recovred, classes.headerBold);
  const danger = clsx(classes.paper, classes.danger, classes.headerBold);
  const critical = clsx(classes.paper, classes.critical, classes.headerBold);
  const activeCases = clsx(classes.paper, classes.active, classes.headerBold);
  return (
    <Aux>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9} lg={9} className={showTotalCase}>
          Total Coronavirus Cases :
        </Grid>
        <Grid item xs={12} md={3} lg={3} className={showTotalCase}>
          <Grid>{totalData.cases.total}</Grid>
          <Grid className={classes.totalCasePercFont}>
            (%{totalData.PercentConfirmed.toFixed(5)})
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Grid item xs={12} md={3} lg={3}>
          <Paper className={activeCases}>
            <Grid>Active</Grid>
            <Grid>
              {totalData.cases.active}
              (%{totalData.PercentActive.toFixed(2)})
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Paper className={danger}>
            <Grid>Deaths</Grid>
            <Grid>
              {totalData.deaths.total}(%{totalData.PercentDeath.toFixed(2)})
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Paper className={recovered}>
            <Grid>Recoverd</Grid>
            <Grid>
              {totalData.cases.recovered}
              (%{totalData.PercentRecovered.toFixed(2)})
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Paper className={critical}>
            <Grid>Critical</Grid>
            <Grid>
              {totalData.cases.critical}
              (%{totalData.PercentCritical.toFixed(2)})
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Aux>
  );
};

export default TotalCases;
