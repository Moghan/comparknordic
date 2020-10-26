import React from 'react';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

export interface IBuyTicketDialog {
  open: boolean;
  onClose: () => void;
  message: string;
}

export function ErrorDialog(props: IBuyTicketDialog) {
  const { onClose, open, message } = props;

  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">{message}</DialogTitle>
      <Button onClick={() => handleClose()}>Close</Button>
    </Dialog>
  )
}