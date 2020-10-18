import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

const emails = ['username@gmail.com', 'user02@gmail.com'];
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

export function BuyTicketDialog(props: IBuyTicketDialog) {
  const classes = useStyles();
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = (value: string) => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Thank you for buying a ticket.</DialogTitle>
      <div className={classes.dialogItem}>
        <Typography variant="subtitle2" gutterBottom>
            Enter this code on exit:
        </Typography>
        <Typography variant="h3" gutterBottom>
            1001
        </Typography>
      </div>
      <div className={classes.dialogItem}>
        <Typography variant="subtitle2" gutterBottom>
            Time of arrivel:
        </Typography>
        <Typography variant="body2" gutterBottom>
            00-00-00
        </Typography>
      </div>
      <div className={classes.dialogItem}>
        <Typography variant="subtitle1" gutterBottom>
            You found a spot for your vehicle on the ground floor.
        </Typography>
      </div>
      <Button onClick={() => handleClose()}>Close</Button>
    </Dialog>
  );
}