import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';
import ContactsIcon from '@material-ui/icons/Contacts';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from '@reach/router'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
        width: 250,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        },
    })
)

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpen(open)
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
          <ListItem button key={'About'} component={Link} to={'/about'}>
            <ListItemIcon>
                <InfoIcon />
            </ListItemIcon>
            <ListItemText primary={'About'} />
          </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem button key={'Contact'} component={Link} to={'/contact'}>
            <ListItemIcon>
                <ContactsIcon />
            </ListItemIcon>
            <ListItemText primary={'Contact'} />
          </ListItem>
      </List>
    </div>
  );

  return (
    <div>
        <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor={'left'} open={open} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
    </div>
  );
}
