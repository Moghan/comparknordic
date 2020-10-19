import React from 'react';
import '../../App.css';
import { Link, RouteComponentProps } from "@reach/router"
import { connect } from 'react-redux'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { garages } from '../../test-data/data';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';

import { deleteSpot } from '../../redux/actions'


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export interface IManage extends RouteComponentProps {
  garage: any,
  deleteSpot: (spotId: number, garageId: string, level: number) => void
}

export function Manage({ garage, deleteSpot }: IManage) {
  const classes = useStyles();

  

  return (
    <div>
      <h1>Garage management</h1>
      <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>SpotId</TableCell>
            <TableCell align="right">Level</TableCell>
            <TableCell align="right">VehicleType</TableCell>
            <TableCell align="right">free</TableCell>
            <TableCell align="right">Modify</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {garage.floors.map((floor: any, index: number) => floor.spots.map((row: any) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{index}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.free ? 'true' : 'false'}</TableCell>
              <TableCell align="right"><IconButton onClick={() => deleteSpot(row.id, garage.id, index)}><Delete /></IconButton></TableCell>
            </TableRow>
          )))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

const mapStateToProps = ({root: {app}}: any, { garageId }: any) => {
  const garage = app.garages.find((g: any) => g.id === garageId)
  
  return {
    garage,
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  deleteSpot: (spotId: number, garageId: string, level: number) => {dispatch(deleteSpot(spotId, garageId, level))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Manage)