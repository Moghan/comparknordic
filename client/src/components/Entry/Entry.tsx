import React from 'react';
import '../../App.css';
import { navigate, RouteComponentProps } from "@reach/router"
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
import { Spot } from '../../types/Spot'

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
  spots: Spot[],
  nextTicketId: number,
  addTicket: (garageId: string, vehicleType: string, nextTicketId: number) => void
}

export function Entry({ garage, spots, addTicket, nextTicketId }: IEntry) {
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
    setOpen(true)
  }

  const handleOnCloseDialog = () => {
    setOpen(false)
    navigate(`/garages/${garage.id}`)
  }

  const spotsPerVehicle = inGaragePerVehicle(spots)

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
            disabled={spotsPerVehicle.Handicapped.free === 0}
            value="Handicapped"
            control={<Radio />}
            label="Handicapped"
          />
          <FormControlLabel
            disabled={spotsPerVehicle.Motorcycle.free === 0}
            value="Motorcycle"
            control={<Radio />}
            label="Motorcycle"
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
        Take ticket
      </Button>
      <BuyTicketDialog open={open} onClose={handleOnCloseDialog} ticketId={ticketId}/>
    </div>
  )
}

const mapStateToProps = ({root: {app}}: any, { garageId }: any) => {
  const garage = app.garages.find((g: any) => g.id === garageId)
  const spots = app.spots.filter((spot: any) => spot.garageId === garage.id)
  
  return {
    garage,
    spots,
    nextTicketId: app.nextTicketId
  }
}
const mapDispatchToProps = (dispatch: any) => ({
  addTicket: (garageId: string, vehicleType: string, nextTicketId: number) => {dispatch(addTicket(garageId, vehicleType, nextTicketId))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Entry)
