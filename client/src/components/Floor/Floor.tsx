import React from 'react';
import '../../App.css';
import { Link, RouteComponentProps } from "@reach/router"
import { connect } from 'react-redux'
import { onFloorPerVehicle } from '../../utils/availableSpots'


export interface IFloor extends RouteComponentProps {
  garage: any,
  spots: any,
  level?: string
}

export function Floor({ garage, level, spots }: IFloor) {

  const title = Number(level) === 0 ? "Floor level : Ground" : `Floor level: ${level}`
  
  if(level === undefined) {
    return (
      <h1>This level does not exit. Start over <Link to="/">here</Link>.</h1>
    )
  }

  console.log("garage.floors[level]", garage.floors[level])
  console.log("spots", spots)
  const floorData = onFloorPerVehicle(spots)

  return (
    <>
      <h1>{title}</h1>
      { Object.entries(floorData).map(([key, value]: any) => {
        return (
        <div>
          <h3>{key} {value.free} / {value.total}</h3>
        </div>
        )}
      )}
    </>
  )
}

const mapStateToProps = ({root: {app}}: any, { garageId }: any) => {
  const garage = app.garages.find((g: any) => g.id === garageId)
  const spots = app.spots.filter((spot: any) => spot.garageId === garageId)
  
  return {
    garage,
    spots
  }
}

export default connect(mapStateToProps)(Floor)