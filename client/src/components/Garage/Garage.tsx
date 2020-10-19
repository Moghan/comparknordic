import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { RouteComponentProps, navigate } from "@reach/router"
import EntrenceCard from './EntrenceCard'
import FloorCard from './FloorCard'
import EntryCard from './EntryCard'
import ExitCard from './ExitCard'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';

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
  availableSpots: number
}

export function Garage(props: IGarage) {
  const { garageId, availableSpots, currentGarage } = props
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Button variant="contained" onClick={() => navigate(`/manage/${garageId}`)}>Manage this garage...</Button>
      <EntrenceCard
        name={currentGarage.name}
        availableSpots={availableSpots}
        garageId={garageId}
      />
      { currentGarage.floors.map((floor: any, index: number) => (
        <FloorCard key={index} garageId={garageId} floor={floor} level={index} />
      ))}
      <EntryCard garageId={garageId} />
      <ExitCard garageId={garageId} />
    </div>
  );
}

const mapStateToProps = ({root: {app}}: any, { garageId }: any) => {
  const currentGarage = app.garages.find((g: any) => g.id === garageId)
  const availableSpots = currentGarage.floors.map((floor: any) => 
    floor.spots.filter((spot: any) => spot.free).length).reduce((a: number, b: number) => a + b, 0)
  
  return {
    currentGarage,
    availableSpots
  }
}

export default connect(mapStateToProps)(Garage)
