import React from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  alpha,
  IconButton,
  Grid,
  Box,
} from "@material-ui/core"
import GitHubIcon from "@material-ui/icons/GitHub"
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import HomeIcon from "@material-ui/icons/Home"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  gridRoot: {
    [theme.breakpoints.down("sm")]: {
      padding: "1rem",
    },
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
  menuButton: {
    marginRight: theme.spacing(2),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}))

const Header = ({ title }) => {
  const classes = useStyles()
  return (
    <Box className="cs-header">
      <Box className={`${classes.root} header-wrapper`}>
        <AppBar position="fixed" className="cs-app-bar">
          <Toolbar>
            <Grid className={classes.gridRoot} container spacing={1}>
              <Grid
                className={`${classes.root} ${classes.infoRoot}`}
                item
                xs={12}
                sm={6}
                md={6}
              >
                <Typography className={classes.title} variant="h6" noWrap>
                  {title}
                </Typography>
              </Grid>
              {/* <Box className={classes.search}>
                            <Box className={classes.searchIcon}>
                                <SearchIcon />
                            </Box>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Box> */}
              <Grid
                className={`${classes.root} ${classes.pageRoot}`}
                item
                xs={12}
                sm={6}
                md={6}
              >
                <Box>
                  <IconButton href="/" aria-label="Go to My Home">
                    <HomeIcon />
                  </IconButton>
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
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  )
}

export default Header
