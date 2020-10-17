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

interface IGarageCard {
  name: string,
  availableSpots: number
}

export default function EntrenceCard({name, availableSpots}: IGarageCard) {
  const classes = useStyles();
  
  return (
    <Card className={classes.root} onClick={() => navigate("/garages")}>
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
