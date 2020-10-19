import React from 'react';
import '../../App.css';
import { RouteComponentProps } from "@reach/router"
import { connect } from 'react-redux'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { inGaragePerVehicle } from '../../utils/availableSpots'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { BuyTicketDialog } from './BuyTicketDialog'
import { addTicket } from '../../redux/actions'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    freeSpots: {
      color: 'green',
      padding: 12
    },
    garageFull: {
      color: 'red',
      padding: 12
    },
    buyTicketButton: {
      maxWidth: 240
    }
  }),
);

export interface IEntry extends RouteComponentProps {
  garage: any,
  availableSpots: number,
  nextTicketId: number,
  addTicket: (garageId: string, vehicleType: string, nextTicketId: number) => void
}

export function Entry({ garage, availableSpots, addTicket, nextTicketId }: IEntry) {
  const classes = useStyles()
  const [value, setValue] = React.useState('')
  const [open, setOpen] = React.useState(false)
  const [ticketId, setTicketId] = React.useState(0)


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const handleBuyTicket =  () => {
    addTicket(garage.id, value, nextTicketId)
    setValue('')
    setTicketId(nextTicketId)
    console.log("handle buy ticket", garage.id, value)
    setOpen(true)
  }

  const spotsPerVehicle = inGaragePerVehicle(garage)

  return (
    <div className={classes.root}>
      <h1>Entry {garage.name}</h1>
      <FormControl component="fieldset">
        <FormLabel component="legend">Please select your vehicle type</FormLabel>
        <RadioGroup aria-label="vehicleType" name="vehicleType" value={value} onChange={handleChange}>
          <FormControlLabel
            disabled={spotsPerVehicle.Compact.free === 0}
            value="Compact"
            control={<Radio />}
            label="Compact"
          />
          <FormControlLabel
            disabled={spotsPerVehicle.Large.free === 0}
            value="Large"
            control={<Radio />}
            label="Large"
          />
          <FormControlLabel
            disabled={spotsPerVehicle.Motorcycle.free === 0}
            value="Motorcycle"
            control={<Radio />}
            label="Motorcycle"
          />
          <FormControlLabel
            disabled={spotsPerVehicle.Handicapped.free === 0}
            value="Handicapped"
            control={<Radio />}
            label="Handicapped"
          />
        </RadioGroup>
      </FormControl>
      <Button
        className={classes.buyTicketButton}
        disabled={value === ''}
        variant="contained"
        color="primary"
        onClick={() => handleBuyTicket()}
      >
        Buy ticket
      </Button>
      <BuyTicketDialog open={open} onClose={() => setOpen(false)} ticketId={ticketId}/>
    </div>
  )
}

const mapStateToProps = ({root: {app}}: any, { garageId }: any) => {
  console.log("APP", app, garageId)
  const garage = app.garages.find((g: any) => g.id === garageId)
  const availableSpots = garage.floors.map((floor: any) => 
    floor.spots.filter((spot: any) => spot.free).length).reduce((a: number, b: number) => a + b, 0)
  
  return {
    garage,
    availableSpots,
    nextTicketId: app.nextTicketId
  }
}
const mapDispatchToProps = (dispatch: any) => ({
  addTicket: (garageId: string, vehicleType: string, nextTicketId: number) => {dispatch(addTicket(garageId, vehicleType, nextTicketId))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Entry)
