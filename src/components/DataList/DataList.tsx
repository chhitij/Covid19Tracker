import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import { Grid, Divider } from '@material-ui/core';
import Aux from '../hoc/auxillary';
import NotFoundImg from '../../assests/images/not_found.png';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  dataList: {
    display: 'flex',
    padding: theme.spacing(1),
  },
  countryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '4px 10px',
    alignItems: 'center',
    fontSize: '16px',
  },
  casesRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '4px 10px',
    alignItems: 'center',
  },
  listHeader: {
    position: 'sticky',
    top: 0,
  },
  table: {
    minWidth: 650,
  },
  listContainer: {
    maxHeight: 'calc(100vh - 200px)',
    overflow: 'auto',
  },
  headerBold: {
    fontWeight: 'bold',
    fontSize: '13px',
  },
  recovred: {
    color: '#00e676',
  },
  danger: {
    color: theme.palette.primary.main,
  },
  active: {
    color: '#f57c00',
  },

  critical: {
    color: theme.palette.error.main,
  },
  notFound: {
    maxHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
  },
}));

export const DataList = (props: any) => {
  const classes = useStyles();
  const { dataList } = props;
  const recovered = clsx(classes.recovred, classes.headerBold);
  const danger = clsx(classes.danger, classes.headerBold);
  const activeCases = clsx(classes.active, classes.headerBold);
  const critical = clsx(classes.critical, classes.headerBold);
  const RowList = () => {
    return dataList.map((item, index) => {
      return (
        <Aux key={item.country}>
          <Grid item xs={12} lg={12} md={9}>
            <Grid className={classes.countryRow}>
              <Grid>{item.country}</Grid>
              <Grid>Total: {item.cases.total}</Grid>
            </Grid>
            <Grid className={classes.casesRow}>
              <Grid className={activeCases}>Active: {item.cases.active}</Grid>
              <Grid className={danger}>Deaths: {item.deaths.total}</Grid>
              <Grid className={recovered}>
                Recoverd: {item.cases.recovered}
              </Grid>
              <Grid className={critical}>Critical: {item.cases.critical}</Grid>
            </Grid>
          </Grid>
          <Divider />
        </Aux>
      );
    });
  };
  return (
    <Aux>
      <Paper className={classes.listContainer}>
        {dataList.length > 0 ? (
          <RowList />
        ) : (
          <Grid className={classes.notFound}>
            <img width={400} src={NotFoundImg}></img>
          </Grid>
        )}
      </Paper>
    </Aux>
  );
};

export default DataList;
