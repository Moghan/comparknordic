import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { green, red } from '@material-ui/core/colors';
import { navigate } from '@reach/router'
import { totalGarage } from '../../utils/availableSpots'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    },
    avatar: {
      backgroundColor: green[700],
    },
    avatarParkingFull: {
      backgroundColor: red[500],
    },
  }),
);

interface IGarageCard {
  garage: any
}

export default function AboutCard({garage}: IGarageCard) {
  const classes = useStyles();
  const { total, free } = totalGarage(garage)
  const isFull = free === 0
  
  return (
    <Card className={classes.root} onClick={() => navigate(`/garages/${garage.id}`)}>
      <CardHeader
        avatar={
          <Avatar aria-label="garage" className={isFull ? classes.avatarParkingFull: classes.avatar}>
            P
          </Avatar>
        }
        title={garage.name}
        subheader={garage.description}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Total spots: {total}
          <br/>
          Available spots: {free}
        </Typography>
      </CardContent>
    </Card>
  );
}
