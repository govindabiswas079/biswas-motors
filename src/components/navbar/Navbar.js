import React, { useState } from "react";
import { Typography, AppBar, Toolbar, Button, IconButton, MenuItem, SwipeableDrawer, List, Divider } from '@material-ui/core';
import { Menu } from '@material-ui/icons'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import imglogo from '../../assetes/image/carlogostyle.png';
import imglogo1 from '../../assetes/image/carlogo.png';

const useStyles = makeStyles((theme) => ({
    Navbar: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
        }
    },
    ResNavbar: {
        [theme.breakpoints.up("md")]: {
            display: "none",
        }
    }
}));

const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(null);
    const isMobileMenuOpen = Boolean(open);

    const openMobileMenu = (event) => {
        setOpen(event.currentTarget);
    };
    const closeMobileMenu = () => {
        setOpen(null);
    };

    const MobileMenu = (
        <SwipeableDrawer onClick={closeMobileMenu} anchorEl={open} id="mobilr-menu" keepMounted open={isMobileMenuOpen}>
            <List>
                {/* <Typography component={Link} to="/" variant="h5" style={{ textDecoration: "none", color: "blue", margin: 10 }}>Biswas Motors</Typography> */}
                <img style={{ width: "70px", marginLeft: "38px", }} src={imglogo1} />
                <Divider />
                <div style={{ margin: "25px" }}>
                    <MenuItem onClick={closeMobileMenu} component={Link} to="/">Home</MenuItem>
                    <Divider />
                    <MenuItem onClick={closeMobileMenu} component={Link} to="/safety">Safety</MenuItem>
                    <Divider />
                    <MenuItem onClick={closeMobileMenu} component={Link} to="/service">Service</MenuItem>
                    <Divider />
                    <MenuItem onClick={closeMobileMenu} component={Link} to="/contact">Contact</MenuItem>
                </div>
            </List>
        </SwipeableDrawer>
    )

    return (
        <React.Fragment>
            <AppBar color="inherit">
                <Toolbar>
                    <img component={Link} to="/" style={{ width: 60 }} src={imglogo} />
                    <div style={{ flexGrow: 1, }}></div>
                    <div className={classes.Navbar}>
                        <Button component={Link} to="/">Home</Button>
                        <Button component={Link} to="/safety">Safety</Button>
                        <Button component={Link} to="/service">Service</Button>
                        <Button component={Link} to="/contact">Contact </Button>
                    </div>
                    <IconButton color="inherit" className={classes.ResNavbar} onClick={openMobileMenu}>
                        <Menu color="inherit" />
                    </IconButton>
                </Toolbar>
            </AppBar>
            {MobileMenu}
        </React.Fragment>
    );
}

export default Navbar;
