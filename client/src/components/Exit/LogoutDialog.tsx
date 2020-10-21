import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  dialogItem: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'baseline'
  },
  labelContainer: {
    minWidth: 100
  }
});

export interface IBuyTicketDialog {
  open: boolean;
  onClose: () => void;
  ticket: {
    timeOfArrival: string;
    timeOfDeparture: string;
    cost: number;
    id: number;
  };
  errorMessage: string;
}

export function LogoutDialog(props: IBuyTicketDialog) {
  const classes = useStyles();
  const { onClose, open, ticket, errorMessage } = props;

  const handleClose = () => {
    onClose();
  };
  if(errorMessage) {
    return (
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">{errorMessage}</DialogTitle>

        <Button onClick={() => handleClose()}>Close</Button>
      </Dialog>    
    )
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Your ticket is logged out. Welcome back.</DialogTitle>
      <div className={classes.dialogItem}>
        <Typography className={classes.labelContainer} variant="subtitle2" gutterBottom>
            Arrival:
        </Typography>
        <Typography variant="body2" gutterBottom>
            {ticket.timeOfArrival}
        </Typography>
      </div>
      <div className={classes.dialogItem}>
        <Typography className={classes.labelContainer} variant="subtitle2" gutterBottom>
            Departure:
        </Typography>
        <Typography variant="body2" gutterBottom>
          {ticket.timeOfDeparture}
        </Typography>
      </div>
      <div className={classes.dialogItem}>
        <Typography className={classes.labelContainer} variant="subtitle2" gutterBottom>
            Payment:
        </Typography>
        <Typography variant="body2" gutterBottom>
          {ticket.cost} NOK
        </Typography>
      </div>
      <Button onClick={() => handleClose()}>Close</Button>
    </Dialog>
  );
}