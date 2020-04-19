import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  dataList: {
    display: 'flex',
    padding: theme.spacing(1),
  },
  tableHeader: {
    position: 'sticky',
    top: 0,
  },
  table: {
    minWidth: 650,
  },
  tableContainer: {
    maxHeight: 450,
  },
  headerBold: {
    fontWeight: 'bold',
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
}));

export const DataList = (props: any) => {
  const classes = useStyles();
  const { dataList } = props;
  const recovered = clsx(classes.recovred, classes.headerBold);
  const danger = clsx(classes.danger, classes.headerBold);
  const activeCases = clsx(classes.active, classes.headerBold);
  const critical = clsx(classes.critical, classes.headerBold);
  const RowTable = () => {
    return dataList.map((item, index) => {
      return (
        <TableRow key={item.country}>
          <TableCell component="th" scope="row">
            {item.country}
          </TableCell>
          <TableCell align="left">{item.cases.total}</TableCell>
          <TableCell align="left">{item.cases.active}</TableCell>
          <TableCell align="left">{item.deaths.total}</TableCell>
          <TableCell align="left">{item.cases.recovered}</TableCell>
          <TableCell align="left">{item.cases.critical}</TableCell>
        </TableRow>
      );
    });
  };
  return (
    <Paper>
      <TableContainer className={classes.tableContainer}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
          stickyHeader={true}
        >
          <TableHead>
            <TableRow>
              <TableCell className={classes.headerBold}>Country</TableCell>
              <TableCell className={classes.headerBold} align="left">
                Total
              </TableCell>
              <TableCell className={activeCases} align="left">
                Active
              </TableCell>
              <TableCell className={danger} align="left">
                Deaths
              </TableCell>
              <TableCell className={recovered} align="left">
                Recovered
              </TableCell>
              <TableCell className={critical} align="left">
                Critical
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <RowTable />
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default DataList;
