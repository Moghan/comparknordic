import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  dialogItem: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'baseline'
  }
});

export interface IBuyTicketDialog {
  open: boolean;
  onClose: () => void;
}

export function LogoutDialog(props: IBuyTicketDialog) {
  const classes = useStyles();
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Your ticket is logged out. Welcome back.</DialogTitle>
      <div className={classes.dialogItem}>
        <Typography variant="subtitle2" gutterBottom>
            Logged in:
        </Typography>
        <Typography variant="body2" gutterBottom>
            00-00-00
        </Typography>
      </div>
      <div className={classes.dialogItem}>
        <Typography variant="subtitle2" gutterBottom>
            Logged out:
        </Typography>
        <Typography variant="body2" gutterBottom>
            00-00-00
        </Typography>
      </div>
      <div className={classes.dialogItem}>
        <Typography variant="subtitle2" gutterBottom>
            Time of visit:
        </Typography>
        <Typography variant="body2" gutterBottom>
            xx-xx-xx
        </Typography>
      </div>
      <div className={classes.dialogItem}>
        <Typography variant="subtitle2" gutterBottom>
            Amount to pay:
        </Typography>
        <Typography variant="body2" gutterBottom>
            xxxx NOK
        </Typography>
      </div>
      <Button onClick={() => handleClose()}>Close</Button>
    </Dialog>
  );
}