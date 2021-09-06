import React from "react";
import kebabCase from "lodash/kebabCase";
import { useStaticQuery, Link, graphql } from "gatsby";
import { List, ListItem, ListItemText, ListSubheader, Paper } from "@material-ui/core";

const TagList = () => {
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
  `
    )
    return (
        <Paper className="taglist">
            <List subheader={<ListSubheader>Explore Topics : </ListSubheader>} className="tags">
                {data.allMarkdownRemark.group.map(tag => (
                    <ListItem key={tag.fieldValue} className="tag">
                        <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                            <ListItemText primary={`#${tag.fieldValue} (${tag.totalCount})`} />
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Paper>

    )
}

export default TagList
