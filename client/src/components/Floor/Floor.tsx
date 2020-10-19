import React from 'react';
import '../../App.css';
import { Link, RouteComponentProps } from "@reach/router"
import { connect } from 'react-redux'
import { onFloorPerVehicle } from '../../utils/availableSpots'


export interface IFloor extends RouteComponentProps {
  garage: any,
  availableSpots: number,
  level?: string
}

export function Floor({ garage, availableSpots, level }: IFloor) {

  const title = Number(level) === 0 ? "Floor level : Ground" : `Floor level: ${level}`
  
  if(level === undefined) {
    return (
      <h1>This level does not exit. Start over <Link to="/">here</Link>.</h1>
    )
  }

  const floorData = onFloorPerVehicle(garage.floors[level])
  console.log("floorData", floorData)

  return (
    <>
      <h1>{title}</h1>
      { Object.entries(floorData).map(([key, value]: any) => {
        console.log("value", value)
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
  const availableSpots = garage.floors.map((floor: any) => 
    floor.spots.filter((spot: any) => spot.free).length).reduce((a: number, b: number) => a + b, 0)
  
  return {
    garage,
    availableSpots
  }
}
const mapDispatchToProps = (dispatch: any) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Floor)