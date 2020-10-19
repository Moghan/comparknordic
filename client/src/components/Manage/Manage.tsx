import React from 'react';
import '../../App.css';
import { RouteComponentProps } from "@reach/router"
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';

import { deleteSpot } from '../../redux/actions'


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

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