import React from 'react';
import '../../App.css';
import { RouteComponentProps } from "@reach/router"
import { connect } from 'react-redux'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { totalGarage } from '../../utils/availableSpots'

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
  spotsState: {
    free: number,
    total: number
  }
}

export function Entrence({ garage, spotsState }: IEntrence) {
  const classes = useStyles();

  return (
    <>
      <h1>Welcome to {garage.name}</h1>
      <div className={classes.root}>
        { spotsState.free === 0 ?
            <h1 className={classes.garageFull}>GARAGE IS FULL</h1>
          :
            <div><h1 className={classes.freeSpots}>{spotsState.free}</h1> spots are available.</div>
        }
      </div>
    </>
  )
}

const mapStateToProps = ({root: {app}}: any, { garageId }: any) => {
  const garage = app.garages.find((g: any) => g.id === garageId)
  const spotsState = totalGarage(garage, app.spots)
  
  return {
    garage,
    spotsState
  }
}

export default connect(mapStateToProps)(Entrence)