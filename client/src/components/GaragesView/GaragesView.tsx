import React from 'react';
import '../../App.css';
import { RouteComponentProps } from "@reach/router"
import { connect } from 'react-redux'
import GarageCard from './GarageCard'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

export interface IGaragesView extends RouteComponentProps {
  garages: any,
  state: any
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 14,
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export function GaragesView({ garages }: IGaragesView) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {
          garages.map((garage: any, index: number) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <GarageCard key={index} garage={garage} />
            </Grid>
          ))
        }
      </Grid>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  garages: state.app.garages,
  state
})

const mapDispatchToProps = (dispatch: any) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(GaragesView)