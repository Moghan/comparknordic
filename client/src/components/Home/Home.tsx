import React from 'react';
import '../../App.css';
import { Link, RouteComponentProps } from "@reach/router"
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: 5,
      maxWidth: 1200,
      margin: 'auto',
      marginTop: 24,
    },
  }),
);

export interface IHome extends RouteComponentProps {
  auth: any;
}

export function Home(props: IHome) {
  const classes = useStyles();
  console.log("Home -> props.auth", props.auth)

  return (
    <div className={classes.root}>
      <h1>Greetings visitor</h1>
      Lets head for the the <Link to="/garages">garages</Link> to get started.
    </div>
  )
}

export default Home