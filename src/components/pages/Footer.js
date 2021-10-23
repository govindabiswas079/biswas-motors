import React from 'react';
import { AppBar, Link, Typography } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
import { useStyles } from '../styles/Footer';

const Footer = () => {
    const classes = useStyles();
    return (
        <>
            <footer className={classes.footer}>
                {/*  */} <h6>logo</h6>
                <Typography variant="h6">
                    biswas motors
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="P">
                    bswas motors
                </Typography>
                <CopyRight />
            </footer>
        </>
    )
}

export default Footer

function CopyRight() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright'}
            <Link color="inherit" href="#">
                biswasmotors{' '}{new Date().getFullYear}2017-2021
            </Link>{' '}
            {new Date().getFullYear}
            {' . '}
        </Typography>

    );
}
