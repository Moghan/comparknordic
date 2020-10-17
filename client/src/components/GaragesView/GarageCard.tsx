import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { navigate } from '@reach/router'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

interface IGarageCard {
  garage: any
}

export default function AboutCard({garage}: IGarageCard) {
  const classes = useStyles();
  
  return (
    <Card className={classes.root} onClick={() => navigate(`/garages/${garage.id}`)}>
      <CardHeader
        avatar={
          <Avatar aria-label="garage" className={classes.avatar}>
            P
          </Avatar>
        }
        title={garage.name}
        subheader={garage.description}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Floors: {garage.floors.length}
          <br/>
          Spots: {garage.floors.map((floor:any) => floor.spots.length).reduce((a: number, b: number) => a + b, 0)}
        </Typography>
      </CardContent>
    </Card>
  );
}
