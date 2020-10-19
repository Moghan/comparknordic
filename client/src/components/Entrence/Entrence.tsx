import React from 'react';
import '../../App.css';
import { RouteComponentProps } from "@reach/router"
import { connect } from 'react-redux'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
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

export interface IEntrence extends RouteComponentProps {
  garage: any,
  availableSpots: number
}

export function Entrence({ garage, availableSpots }: IEntrence) {
  const classes = useStyles();

  return (
    <>
      <h1>Welcome to {garage.name}</h1>
      <div className={classes.root}>
        { availableSpots === 0 ?
            <h1 className={classes.garageFull}>GARAGE IS FULL</h1>
          :
            <div><h1 className={classes.freeSpots}>{availableSpots}</h1> spots are available.</div>
        }
      </div>
    </>
  )
}

const mapStateToProps = ({root: {app}}: any, { garageId }: any) => {
  const garage = app.garages.find((g: any) => g.id === garageId)
  const availableSpots = garage.floors.map((floor: any) => 
    floor.spots.filter((spot: any) => spot.free).length).reduce((a: number, b: number) => a + b, 0)
  
  return {
    garage,
    availableSpots
  }
}

export default connect(mapStateToProps)(Entrence)