import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  Paper,
  Typography,
  Box,
  makeStyles,
  IconButton,
  Container,
} from "@material-ui/core"
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import profile from "../images/profile-pic.png"

const useSyles = makeStyles(theme => ({
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
  paddingRoot: {
    padding: "1rem",
  },
  typoRoot: {
    padding: "0 1rem",
  },
  leftAlignRoot: {
    alignSelf: "flex-start",
  },
  titleRoot: {
    margin: "1rem",
    [theme.breakpoints.down("sm")]: {
      margin: "0",
    },
  },
  boxRoot: {
    minHeight: "25vh",
    width: "40%",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "1rem",
    },
  },
  contentRoot: {
    padding: "3rem",
    [theme.breakpoints.down("sm")]: {
      padding: ".5rem 1rem",
    },
  },
  imgRoot: {
    height: "250px",
    width: "250px",
    borderRadius: "50%",
    margin: "1rem",
  },
}))

const About = ({ data, location }) => {
  const classes = useSyles()
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About" />
      <Paper
        className={`${classes.paperRoot} ${classes.centerAlign} ${classes.columnDirection}`}
      >
        <Box className={classes.titleRoot}>
          <Typography className={classes.typoRoot} variant="h5">
            {" "}
            Welcome! Learners{" "}
          </Typography>
        </Box>
        <Box
          className={`${classes.boxRoot} ${classes.centerAlign} ${classes.columnDirection}`}
        >
          <Typography className={classes.typoRoot} paragraph={true}>
            CodingSparkles was created in the year 2021 with an intention to
            share the information about the web development examples, tutorials.
          </Typography>
          <Typography className={classes.typoRoot} paragraph={true}>
            This blog contains the articles and tutorials related to the
            technologies React JS, JavaScript, HTML, CSS, Sass, etc.
          </Typography>
          <Typography
            className={`${classes.typoRoot} ${classes.leftAlignRoot}`}
            paragraph={true}
          >
            This blog is maintained by Velmurugan Sivaprakasam.
          </Typography>
        </Box>
        <Box
          className={`${classes.boxRoot} ${classes.centerAlign} ${classes.columnDirection}`}
        >
          <img src={profile} alt="profile" className={classes.imgRoot} />
          <Typography className={classes.typoRoot} paragraph={true}>
            Founder and Editor
          </Typography>
          <Typography className={classes.typoRoot} paragraph={true}>
            I am a Web Developer who is loving to learn and share the knowledge.
            I am working as a front end developer full-time and writing a blog
            in my free time. I am excited to connect with you all through this
            blog site and learn along with you.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6">Keep me connected</Typography>
          <Container
            className={`${classes.centerAlign} ${classes.paddingRoot}`}
          >
            <IconButton
              href="https://www.linkedin.com/in/velmurugan-sivapraksam-4aa108174"
              aria-label="Go to My LinkedIn"
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/velprathap"
              aria-label="Go to My Instagram"
              target="_blank"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              href="https://www.twitter.com/velprathap"
              aria-label="Go to My Twitter"
              target="_blank"
            >
              <TwitterIcon />
            </IconButton>
          </Container>
        </Box>
      </Paper>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
