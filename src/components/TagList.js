import React from "react"
import kebabCase from "lodash/kebabCase"
import { useStaticQuery, Link, graphql } from "gatsby"
import { Paper, Chip, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  paperRoot: {
    display: "flex",
    flexWrap: "wrap",
  },
  chipRoot: {
    padding: ".5rem",
    lineHeight: "32px",
    textDecoration: "none",
    display: "block",
  },
  reactBg: {
    backgroundColor: "#DEF3FD", //hsl(195, 100%, 50%)",
  },
  jsBg: {
    backgroundColor: "#FED9C9", //"hsl(60, 100%, 50%)",
  },
  cssBg: {
    backgroundColor: "#FFEFD8", //"hsl(285, 100%, 50%)",
  },
  sassBg: {
    backgroundColor: "#FFDDE4", //"hsl(0, 100%, 90%)",
  },
  angularBg: {
    backgroundColor: "#FF7F7F", //"hsl(0, 95%, 50%)",
  },
})

const TagList = () => {
  const classes = useStyles()

  const getClassName = tag => {
    if (tag === "JavaScript") {
      return "jsBg"
    }
    if (tag === "React JS") {
      return "reactBg"
    }
    if (tag === "Css") {
      return "csstBg"
    }
    if (tag === "Sass") {
      return "sassBg"
    }
    if (tag === "Angular") {
      return "angularBg"
    }
  }

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  return (
    <Paper className={classes.paperRoot}>
      {data.allMarkdownRemark.group.map(tag => (
        <Link
          key={tag.fieldValue}
          className={classes.chipRoot}
          to={`/tags/${kebabCase(tag.fieldValue)}/`}
        >
          <Chip
            key={tag.fieldValue}
            className={classes[getClassName(tag.fieldValue)]}
            label={`${tag.fieldValue} (${tag.totalCount})`}
            size="medium"
          />
        </Link>
      ))}
    </Paper>
  )
}

export default TagList
