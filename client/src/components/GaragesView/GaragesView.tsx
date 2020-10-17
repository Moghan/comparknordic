import React from 'react';
import '../../App.css';
import { RouteComponentProps } from "@reach/router"
import { connect } from 'react-redux'
import GarageCard from './GarageCard'

export interface IHome extends RouteComponentProps {
  garages: any,
  state: any
}

export function Home({ garages }: IHome) {
  //console.log("props.state", props.state)
  //console.log("props.garage", props.garages)
  return (
    garages.map((garage: any, index: number) => (
      <GarageCard key={index} garage={garage} />
    ))
  )
}

const mapStateToProps = (state: any) => ({
  garages: state.app.garages,
  state
})

const mapDispatchToProps = (dispatch: any) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)