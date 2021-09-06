import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        alignItems: "center",
    },
    infoRoot: {
        justifyContent: "flex-start",
        [theme.breakpoints.down('sm')]: {
            justifyContent: "center"
        }
    },
    pageRoot: {
        justifyContent: "flex-end",
        [theme.breakpoints.down('sm')]: {
            justifyContent: "center"
        }
    }
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div className='cs-footer'>
            <Grid container spacing={3}>
                <Grid className={`${classes.root} ${classes.infoRoot}`} item xs={12} sm={6} md={6}>
                    <div className="copyright-info">CodingSparkles © {new Date().getFullYear()}. All rights reserved.</div>
                </Grid>
                <Grid className={`${classes.root} ${classes.pageRoot}`} item xs={12} sm={6} md={6}>
                    <div className="page-menu-container">
                        <div className="about-page">About</div>
                        <div className="contact-page">Contact</div>
                        <div className="privacy-page">Privacy Policy</div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;