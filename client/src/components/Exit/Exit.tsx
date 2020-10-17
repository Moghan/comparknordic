import React from 'react';
import '../../App.css';
import { Link, RouteComponentProps } from "@reach/router"
import { connect } from 'react-redux'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { garages } from '../../test-data/data';
import { FullscreenExit } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'baseline',
      flexGrow: 1,
      padding: 5,
      maxWidth: 1200,
      margin: 'auto',
      marginTop: 24,
    },
    freeSpots: {
      color: 'green',
      padding: 12
    },
    garageFull: {
      color: 'red',
      padding: 12
    }
  }),
);

export interface IExit extends RouteComponentProps {
  garage: any,
  availableSpots: number
}

export function Exit({ garage, availableSpots }: IExit) {
  const classes = useStyles();

  return (
    <h1>Exit</h1>
  )
}

const mapStateToProps = ({ app }: any, { garageId }: any) => {
  console.log("APP", app, garageId)
  const garage = app.garages.find((g: any) => g.id === garageId)
  const availableSpots = garage.floors.map((floor: any) => 
    floor.spots.filter((spot: any) => spot.free).length).reduce((a: number, b: number) => a + b, 0)
  
  return {
    garage,
    availableSpots
  }
}
const mapDispatchToProps = (dispatch: any) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Exit)