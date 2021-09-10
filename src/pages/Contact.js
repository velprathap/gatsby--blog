import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  Box,
  Paper,
  Typography,
  Container,
  makeStyles,
  Grid,
  IconButton,
} from "@material-ui/core"
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import GitHubIcon from "@material-ui/icons/GitHub"
import contactImg from "../images/contact-us.jpg"

const useStyles = makeStyles({
  centerAlign: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  columnDirection: {
    flexDirection: "column",
  },
  paperRoot: {
    minHeight: "80vh",
  },
  boxRoot: {
    padding: "1.5rem",
  },
  gridContent: {
    padding: "1rem",
  },
  mailContainer: {
    flexDirection: "column",
    margin: "2rem 0",
  },
  bold: {
    fontWeight: "bold",
  },
  paraTypo: {
    textAlign: "center",
  },
})

const Contact = ({ data, location }) => {
  const classes = useStyles()
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Contact" />
      <Paper
        className={`${classes.paperRoot} ${classes.centerAlign} ${classes.columnDirection}`}
      >
        <Box className={`${classes.boxRoot} ${classes.centerAlign}`}>
          <Typography variant="h4">Get in touch!</Typography>
        </Box>
        <Box className={`${classes.boxRoot} ${classes.centerAlign}`}>
          <Grid container>
            <Grid item xs={12} sd={6} md={6}>
              <img
                src={contactImg}
                alt="contact"
                style={{ height: "50vh", width: "100%" }}
              />
            </Grid>
            <Grid
              className={`${classes.gridContent} ${classes.centerAlign} ${classes.columnDirection}`}
              item
              xs={12}
              sd={6}
              md={6}
            >
              <Typography className={classes.paraTypo} paragraph={true}>
                Have a feedback? We'd love to hear from you. Connect with us
                through the following ways.
              </Typography>
              <Container
                className={`${classes.mailContainer} ${classes.centerAlign}`}
              >
                <Typography className={classes.bold} variant="h6">
                  Email:
                </Typography>
                <Typography variant="h6">codingsparkles@gmail.com</Typography>
              </Container>
              <Container
                className={`${classes.centerAlign} ${classes.columnDirection}`}
              >
                <Typography className={classes.bold} variant="h6">
                  Socials:
                </Typography>
                <div>
                  <IconButton
                    href="https://www.github.com/codingsparkles"
                    aria-label="Go to My Github"
                    target="_blank"
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton
                    href="https://www.instagram.com/codingsparkles"
                    aria-label="Go to My Instagram"
                    target="_blank"
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton
                    href="https://www.twitter.com/codingsparkles"
                    aria-label="Go to My Twitter"
                    target="_blank"
                  >
                    <TwitterIcon />
                  </IconButton>
                </div>
              </Container>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
