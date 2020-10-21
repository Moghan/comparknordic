import React from 'react';
import '../../App.css';
import { navigate, RouteComponentProps } from "@reach/router"
import { connect } from 'react-redux'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { LogoutDialog } from './LogoutDialog'
import { logoutTicket } from '../../redux/actions'
import { ITicket } from '../../utils/commonInterfaces'


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
  rules: any[],
  logoutTicket: (ticket: any, garage: any) => void
}

export function Exit({ garage, availableSpots, rules, logoutTicket }: IExit) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false)
  const [code, setCode] = React.useState('')
  const [errorMessage, setErrorMessage] = React.useState('')
  const [ticket, setTicket] = React.useState<ITicket>({
    timeOfArrival: '',
    timeOfDeparture: '',
    cost: 0,
    id: 0
  })

  const handleConfirm = () => {
    const idAsNumber = Number(code)
    if(isNaN(idAsNumber)) {
      setErrorMessage("Code is not a number.")
    }
    const isLoggedInTicket = garage.tickets.find((ticket: any) => ticket.id === idAsNumber)
    if(errorMessage ==='' && !isLoggedInTicket) {
      setErrorMessage("Ticket not found")
    } else if(isLoggedInTicket.timeOfDeparture) {
      setErrorMessage("ticket has already been logged out")
    }

    if(errorMessage !== '') {
      console.log("error", errorMessage)
      const timeOfDeparture =  new Date()

      const hoursFloat = (timeOfDeparture.getTime() - new Date(isLoggedInTicket.timeOfArrival).getTime()) / 1000 /60 /60
      const hoursFloor = Math.floor(hoursFloat)
      const partOfHourFloat = hoursFloat - hoursFloor

      let costDetails = `Time of stay: ${hoursFloat}\n`
      const defaultRule = rules.find((rule) => rule.hour === 0)
      let lastIndex = 1
      let cost = 0
      for(let index = 1; index <= hoursFloor; index++) {
        const rule = rules.find((rule) => rule.hour === index) || defaultRule
        cost += rule.cost
        costDetails = costDetails + `Cost hour ${index}: ${rule.cost}\n`
        lastIndex = index
      }
      if(partOfHourFloat > 0) {
        const rule = rules.find((rule) => rule.hour === lastIndex) || defaultRule
        const lastCost = Math.floor(rule.cost * partOfHourFloat)
        cost += lastCost
        costDetails = costDetails + `Cost hour ${lastIndex}: ${lastCost}\n`
      }
      const updatedTicket = {
        ...isLoggedInTicket,
        timeOfDeparture: timeOfDeparture.toISOString(),
        cost
      }

      costDetails = costDetails + `Total cost: ${cost}`

      console.log(costDetails)
      setTicket(updatedTicket)

      logoutTicket(updatedTicket, garage)
    }

    setOpen(true)
  }

  const handleOnClose = () => {
    setOpen(false)
    if(errorMessage === '') {
      navigate(`/garages/${garage.id}`)
    } else {
      setErrorMessage('')
    }
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
        { ticket &&
          <LogoutDialog open={open} onClose={handleOnClose} ticket={ticket} errorMessage={errorMessage}/>
        }

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

const mapDispatchToProps = (dispatch: any) => ({
  logoutTicket: (ticket: any, garage: any) => {dispatch(logoutTicket(ticket, garage))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Exit)