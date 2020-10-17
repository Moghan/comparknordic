import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { red } from '@material-ui/core/colors';
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

interface IExitCard {
  garageId?: string
}

export default function ExitCard({ garageId }: IExitCard) {
  const classes = useStyles();
  //console.log("exit garageId", garageId)
  
  return (
    <Card className={classes.root} onClick={() => navigate(`/garages/${garageId}/exit`)}>
      <CardHeader
        title="Exit"
      />
    </Card>
  );
}
