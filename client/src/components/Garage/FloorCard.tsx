import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { navigate } from '@reach/router'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      margin: 'auto',
      marginTop: 24
    }
  }),
);

interface IFloorCard {
  garageId?: string,
  floor: any,
  level: number
}

export default function FloorCard({floor, level, garageId}: IFloorCard) {
  const classes = useStyles();
  const title = level === 0 ? "Ground level" : `${level} level`
  const totalSpots = floor.spots.length
  const availableSpots = floor.spots.filter((spot: any) => spot.free).length

  
  return (
    <Card className={classes.root} onClick={() => navigate(`/garages/${garageId}/${level}`)}>
      <CardHeader
        title={title}
        subheader={`${availableSpots} available out of ${totalSpots}`}
      />
    </Card>
  );
}
