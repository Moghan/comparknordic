import React from 'react';
import '../../App.css';
import { RouteComponentProps } from "@reach/router"
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

export interface ICallback extends RouteComponentProps {
  handleAuthentication: any;
}

export function Callback(props: ICallback) {
  const classes = useStyles();
  console.log("Callback -> props", props)
  React.useEffect(() => {
    props.handleAuthentication(props)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={classes.root}>
      <h1>This is the Callback</h1>
    </div>
  )
}

export default Callback