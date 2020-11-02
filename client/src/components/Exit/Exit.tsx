import React from 'react';
import '../../App.css';
import { navigate, RouteComponentProps } from "@reach/router"
import { connect } from 'react-redux'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { LogoutDialog } from './LogoutDialog'
import { ErrorDialog } from './ErrorDialog'
import { logoutTicket } from '../../redux/actions'
import { Ticket } from '../../types/Ticket'
import { Spot } from '../../types/Spot'


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
  spots: Spot[],
  tickets: Ticket[],
  rules: any[],
  logoutTicket: (ticket: any, garage: any) => void
}

export function Exit({ garage, spots, tickets, rules, logoutTicket }: IExit) {
  const classes = useStyles();
  const [openLogoutDialog, setOpenLogoutDialog] = React.useState(false)
  const [openErrorDialog, setOpenErrorDialog] = React.useState(false)
  const [code, setCode] = React.useState('')
  const [errorMessage, setErrorMessage] = React.useState('')
  const [ticket, setTicket] = React.useState<Ticket>({
    timeOfArrival: '',
    timeOfDeparture: '',
    cost: 0,
    id: "",
    garageId: "",
    code: 0
  })

  const handleConfirm = () => {
    const codeAsNumber = Number(code)
    console.log("idasnumnber", codeAsNumber)
    let showErrorMessage = false
    if(isNaN(codeAsNumber)) {
      setErrorMessage("Code is not a number.")
      showErrorMessage = true
    }
    const isLoggedInTicket = tickets.find((ticket: Ticket) => ticket.code === codeAsNumber)
    if(!showErrorMessage) {
      if(!isLoggedInTicket) {
        setErrorMessage("Ticket not found")
        showErrorMessage = true
      } else if(isLoggedInTicket.timeOfDeparture) {
        setErrorMessage("ticket has already been logged out")
        showErrorMessage = true
      }            
    }

    if(showErrorMessage || !isLoggedInTicket) {
      setOpenErrorDialog(true)
    } else {
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

      setOpenLogoutDialog(true)
    }

  }

  const handleOnClose = () => {
    setOpenLogoutDialog(false)
    setOpenErrorDialog(false)
    if(errorMessage === '') {
      navigate(`/garages/${garage.id}`)
    } else {
      setErrorMessage('')
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleConfirm()
  }

  return (
    <div>
      <Typography variant="subtitle2" gutterBottom>
          Enter your tickets code and press logout.
      </Typography>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <TextField
            onChange={handleChange}
            id="standard-read-only-input"
            label="Ticket Code"
            value={code}
          />
        </div>
        <Button variant="contained" color="primary" onClick={() => handleConfirm()}>Logout</Button>
        <ErrorDialog open={openErrorDialog} onClose={handleOnClose} message={errorMessage}/>
        <LogoutDialog open={openLogoutDialog} onClose={handleOnClose} ticket={ticket} />
      </form>
    </div>
  )
}

const mapStateToProps = ({root: {app}}: any, { garageId }: any) => {
  const garage = app.garages.find((g: any) => g.id === garageId)
  const tickets = app.tickets.filter((ticket: Ticket) => ticket.garageId === garageId)
  const spots = app.spots.filter((spot: Spot) => spot.garageId === garageId)
  
  return {
    garage,
    spots,
    tickets,
    rules: app.rules
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  logoutTicket: (ticket: Ticket, garage: any) => {dispatch(logoutTicket(ticket, garage))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Exit)