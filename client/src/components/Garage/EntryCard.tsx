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

interface IGarageCard {
  floor: any
}

export default function FloorCard({floor}: IGarageCard) {
  const classes = useStyles();
  
  return (
    <Card className={classes.root} onClick={() => navigate("/garages")}>
      <CardHeader
        title="Entry"
      />
    </Card>
  );
}
