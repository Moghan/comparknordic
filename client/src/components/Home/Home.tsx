import React from 'react';
import '../../App.css';
import { Link, RouteComponentProps } from "@reach/router"
import { connect } from 'react-redux'


export interface IHome extends RouteComponentProps {
}

export function Home(props: IHome) {
  //console.log("props.state", props.state)
  //console.log("props.garage", props.garages)
  return (
    <div>Go to the <Link to="/garages">garages</Link> to get started.</div>
  )
}

const mapStateToProps = (state: any) => ({
})

const mapDispatchToProps = (dispatch: any) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)