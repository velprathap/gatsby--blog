import React from "react"
import { Box, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  boxRoot: {
    marginTop: "64px",
    padding: "1rem",

    [theme.breakpoints.down("sm")]: {
      marginTop: "90px",
    },
  },
}))
const Main = props => {
  const classes = useStyles()

  return (
    <Box className={`${classes.boxRoot} cs-main`}>
      <Box>{props.children}</Box>
      <Box></Box>
    </Box>
  )
}

export default Main
