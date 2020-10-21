import React from 'react';
import '../../App.css';
import { navigate, RouteComponentProps } from "@reach/router"
import { connect } from 'react-redux'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { LogoutDialog } from './LogoutDialog'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

export interface IExit extends RouteComponentProps {
  garage: any,
  availableSpots: number,
  rules: any[]
}

export function Exit({ garage, availableSpots, rules }: IExit) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false)
  const [code, setCode] = React.useState('')

  const handleConfirm = () => {
    const idAsNumber = Number(code)
    if(isNaN(idAsNumber)) {
      console.log("Code is not a number.")
      return
    }
    const isLoggedInTicket = garage.tickets.find((ticket: any) => ticket.id === idAsNumber)
    console.log("isLoggedTicket", isLoggedInTicket)
    if(!isLoggedInTicket) {
      console.log("Ticket not found")
      return
    }
    console.log("rules", rules)
    const timeOfDeparture =  new Date()
    console.log("timeOfArrival  ", isLoggedInTicket.timeOfArrival)
    console.log("timeOfDeparture", timeOfDeparture.toISOString())

    const lengthOfStay = Math.floor((timeOfDeparture.getTime() - new Date(isLoggedInTicket.timeOfArrival).getTime()) / 1000 /60 /60)

    console.log("time of stay", lengthOfStay)
    // logoutTicket(idAsNumber)
    // getTicket(idAsNumber)
    //setOpen(true)
  }

  const handleOnClose = () => {
    setOpen(false)
    navigate(`/garages/${garage.id}`)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  }

  return (
    <div>
      <Typography variant="subtitle2" gutterBottom>
          Enter your tickets code and press logout.
      </Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            onChange={handleChange}
            id="standard-read-only-input"
            label="Ticket Code"
            value={code}
          />
        </div>
        <Button variant="contained" color="primary" onClick={() => handleConfirm()}>Logout</Button>
        <LogoutDialog open={open} onClose={handleOnClose} />

      </form>
    </div>
  )
}

const mapStateToProps = ({root: {app}}: any, { garageId }: any) => {
  const garage = app.garages.find((g: any) => g.id === garageId)
  const availableSpots = garage.floors.map((floor: any) => 
    floor.spots.filter((spot: any) => spot.free).length).reduce((a: number, b: number) => a + b, 0)
  
  return {
    garage,
    availableSpots,
    rules: app.rules
  }
}

export default connect(mapStateToProps)(Exit)