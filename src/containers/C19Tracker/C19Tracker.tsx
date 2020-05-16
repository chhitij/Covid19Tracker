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
  TextField,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  Divider,
} from '@material-ui/core';
import SimplePieChart from '../../components/Charts/PieChart';
import { createList } from '../../utils/Data';
import DataList from '../../components/DataList/DataList';
import TotalCases from '../../components/TotalCases/TotalCases';
import SearchIcon from '@material-ui/icons/Search';
import WorlMap from '../../components/WorldMap/Worldmap';
import PublicIcon from '@material-ui/icons/Public';
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
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    minHeight: 153,
  },
  alignCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  input: {
    flex: 1,
    width: '80%',
  },
  searchBar: {
    margin: '0px 0 11px',
  },
  outLineSpace: {
    height: '40px',
    boxShadow: '0 10px 35px rgba(0,0,0,.1)',
    color: '#6c757d',
  },
  dataTableContainer: {
    padding: theme.spacing(2),
  },
}));

const C19Tracker = (props: any) => {
  const { isWorldOption } = props;
  const classes = useStyles();
  const [loading, setLoading] = useState(true),
    [dataList, setDataList] = useState([]),
    [originalList, setOriginalList] = useState([]);
  const fetchData = async () => {
    setLoading(true);
    const statusList: any = await createList();
    setOriginalList(statusList);
    setDataList(statusList[0]);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const searchByName = (event) => {
    const text = event.target.value;
    const mainList: any = originalList[0];
    let filteredList = mainList.filter((item: any) => {
      const itemData = item.country.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setDataList(filteredList);
  };

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const IsdataList = () => {
    return (
      <Aux>
        {dataList.length > 0 ? (
          <Aux>
            <Grid item xs={12} md={12} lg={12} style={{ position: 'relative' }}>
              <TotalCases totalData={dataList[0]} />
            </Grid>
          </Aux>
        ) : (
          ''
        )}
      </Aux>
    );
  };
  return (
    <Aux>
      <div className={classes.appBarSpacer} />
      {loading ? (
        <Grid className={classes.alignCenter}>
          <CircularProgress disableShrink />
        </Grid>
      ) : (
        <Container maxWidth="lg" className={classes.container}>
          {isWorldOption ? (
            <WorlMap worldData={dataList} />
          ) : (
            <Grid container spacing={2}>
              <IsdataList />
              <Divider />
              <Grid item xs={12}>
                <Grid container className={classes.searchBar} justify="center">
                  <Grid item>
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Search
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      onInput={searchByName}
                      className={classes.outLineSpace}
                      inputProps={{ 'aria-label': 'Search' }}
                      startAdornment={
                        <InputAdornment position="start">
                          <PublicIcon />
                        </InputAdornment>
                      }
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={1}
                  className={classes.dataTableContainer}
                >
                  <Grid xs={12} md={12} lg={12}>
                    <DataList dataList={dataList} />
                  </Grid>
                  <Grid item xs={12} md={3} lg={3}>
                    {/* <SimplePieChart chartData={dataList[0]} /> */}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Container>
      )}
    </Aux>
  );
};

export default C19Tracker;
