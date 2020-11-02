import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { RouteComponentProps, navigate } from "@reach/router"
import EntrenceCard from './EntrenceCard'
import FloorCard from './FloorCard'
import EntryCard from './EntryCard'
import ExitCard from './ExitCard'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { Spot } from '../../types/Spot'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 'auto',
    },
  }),
);

interface IGarage extends RouteComponentProps {
  currentGarage: any,
  garageId?: string,
  availableSpots: number,
  spots: any
}

export function Garage(props: IGarage) {
  const { garageId, availableSpots, currentGarage, spots } = props
  const classes = useStyles();
  

  const floors = []
  for(let i = 0 ; i < currentGarage.noFloors ; i++) {
    floors[i] = spots.filter((spot: any) => Number(spot.floor) === i)
  }
  console.log("floors", floors)

  return (
    <div className={classes.root}>
      <Button variant="contained" onClick={() => navigate(`/manage/${garageId}`)}>Manage this garage...</Button>
      <EntrenceCard
        name={currentGarage.name}
        availableSpots={availableSpots}
        garageId={garageId}
      />
      { floors.map((spotsOnFloor: any, index: number) => (
        <FloorCard key={index} garageId={garageId} spots={spotsOnFloor} level={index} />
      ))
       
      }
      <EntryCard garageId={garageId} />
      <ExitCard garageId={garageId} />
    </div>
  );
}

const mapStateToProps = ({root: {app}}: any, { garageId }: any) => {
  console.log("app", app)
  const currentGarage = app.garages.find((g: any) => g.id === garageId)
  const spots = app.spots.filter((spot: Spot) => spot.garageId === garageId)
  const availableSpots = app.spots.filter((spot: Spot) => spot.free && spot.garageId === garageId).length

  return {
    currentGarage,
    availableSpots,
    spots
  }
}

export default connect(mapStateToProps)(Garage)
