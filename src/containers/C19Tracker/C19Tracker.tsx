import React, { useState, useEffect } from 'react';
import Aux from '../../components/hoc/auxillary';
import clsx from 'clsx';
import {
  Container,
  Grid,
  Paper,
  makeStyles,
  Theme,
  CircularProgress,
} from '@material-ui/core';
import SimplePieChart from '../../components/Charts/PieChart';
import { createList } from '../../utils/Data';
import DataList from '../../components/DataList/DataList';
import TotalCases from '../../components/TotalCases/TotalCases';
// import classes from './C19Tracker.module.css';
// creating class based comonent

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    minHeight: 150,
  },
  alignCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
}));

const C19Tracker = () => {
  const classes = useStyles();

  const [loading, setLoading] = useState(true),
    [dataList, setDataList] = useState([]),
    [originalList, setOriginalList] = useState([]);
  const fetchData = async () => {
    setLoading(true);
    const statusList = await createList();
    console.log('statusList', statusList);
    // setOriginalList(statusList);
    setDataList(statusList[0]);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <Aux>
      <div className={classes.appBarSpacer} />
      {loading ? (
        <Grid className={classes.alignCenter}>
          <CircularProgress disableShrink />
        </Grid>
      ) : (
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <TotalCases totalData={dataList[0]} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <SimplePieChart chartData={dataList[0]} />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <DataList dataList={dataList} />
            </Grid>
          </Grid>
        </Container>
      )}
    </Aux>
  );
};

export default C19Tracker;
