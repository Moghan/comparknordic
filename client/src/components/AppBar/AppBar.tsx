import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Drawer from '../Drawer'
import { Link, RouteComponentProps } from "@reach/router"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grow: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        homeButton: {
            textDecoration: 'none',
            color: 'white'
        },
        title: {
            flexGrow: 1
        }
    }),
);

export interface IAppbar extends RouteComponentProps {
    auth?: any;
}


export default function PrimaryAppBar(props: IAppbar) {
    const { auth } = props
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleSignIn = () => {
        console.log("handleSignIn")
        auth.login()
    }

    const menuId = 'primary-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    console.log("Appbar - auth.isAuthenticated", auth.isAuthenticated())

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <Drawer />
                    <Typography className={classes.title} variant="h6" noWrap>
                        <Link to="/" className={classes.homeButton}>
                            Compark Nordic
                        </Link>
                    </Typography>
                    <div className={classes.grow} />
                    <div>
                        {auth.isAuthenticated() ?
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            :
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleSignIn}
                                color="inherit"
                            >
                                <PersonAdd />
                            </IconButton>
                        }

                    </div>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </div>
    );
}
