import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { RouteComponentProps } from "@reach/router"


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      margin: 'auto',
      marginTop: 24
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

export default function AboutCard(props: RouteComponentProps) {
  console.log("about props", props)
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="about" className={classes.avatar}>
            CM
          </Avatar>
        }
        title="Compark Nordic"
        subheader="the forgotten dream not lost"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          In 2004 I got my first job and for almost a year I checked parking tickets and wrote parking fees. 
          It made me think, is there a way to help customers pay their tickets instead of punishing them when not buying or missing the time. 
          The vision of Compark Nordic was born and my best selling point was "the experience begins in the parking lot". Enjoy :)
        </Typography>
      </CardContent>
    </Card>
  );
}
