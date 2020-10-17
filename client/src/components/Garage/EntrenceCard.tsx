import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
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

interface IEntrenceCard {
  name: string,
  availableSpots: number,
  garageId?: string
}

export default function EntrenceCard({name, availableSpots, garageId}: IEntrenceCard) {
  const classes = useStyles();
  
  return (
    <Card className={classes.root} onClick={() => navigate(`/garages/${garageId}/entrence`)}>
      <CardHeader
        title="Entrence"
        subheader={name}
      />
      <CardContent>
        { availableSpots ?
          <Typography variant="body2" color="textSecondary" component="p">
            Spots available: {availableSpots}
          </Typography>
          :
          <Typography variant="body2" color="textSecondary" component="p">
            The garage is FULL,
          </Typography>
        }
      </CardContent>
    </Card>
  );
}
