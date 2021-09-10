import React from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  infoRoot: {
    justifyContent: "flex-start",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  pageRoot: {
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <div className="cs-footer">
      <Grid container spacing={3}>
        <Grid
          className={`${classes.root} ${classes.infoRoot}`}
          item
          xs={12}
          sm={6}
          md={6}
        >
          <div className="copyright-info">
            CodingSparkles © {new Date().getFullYear()}. All rights reserved.
          </div>
        </Grid>
        <Grid
          className={`${classes.root} ${classes.pageRoot}`}
          item
          xs={12}
          sm={6}
          md={6}
        >
          <div className="page-menu-container">
            <Link to="/About/" rel="About">
              <div className="about-page">About</div>
            </Link>
            <Link to="/Contact/" rel="Contact">
              <div className="contact-page">Contact</div>
            </Link>
            <Link to="/PrivacyPolicy/" rel="Privacy Policy">
              <div className="privacy-page">Privacy Policy</div>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
