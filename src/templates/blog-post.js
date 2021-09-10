import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TagList from "../components/TagList"
import { Paper, makeStyles, Typography, Box, Chip, Grid } from "@material-ui/core"
import Img from 'gatsby-image';

const useStyles = makeStyles({
  root: {
    padding: "1rem",
  },
  typoRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  boxRoot: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "1rem"
  },
  chipRoot: {
    margin: "0 .25rem"
  }
});

const BlogPostTemplate = props => {
  const classes = useStyles();
  const { data, location, pageContext } = props;
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const previous = pageContext.previous;
  const next = pageContext.next;
  const imgSrc = (post.frontmatter.thumb && post.frontmatter.thumb.childImageSharp.fluid) || null;
  const tags = post.frontmatter.tags;

  const getStyle = tag => {
    if (tag === "JavaScript") {
      return { backgroundColor: "yellow" };
    }
    if (tag === "React JS") {
      return { backgroundColor: "blue" };
    }
    if (tag === "Css") {
      return { backgroundColor: "green" };
    }
    if (tag === "Sass") {
      return { backgroundColor: "pink" };
    }
    if (tag === "Angular") {
      return { backgroundColor: "orange" };
    }
  }
  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={9} md={9}>
          <Paper className={classes.root}>
            <article
              className="blog-post"
              itemScope
              itemType="http://schema.org/Article"
            >
              <header>
                <Typography className={classes.typoRoot} variant="h4">
                  {post.frontmatter.title}
                </Typography>
                <Box className={classes.boxRoot}>
                  <Box>
                    {
                      tags.map(tag => <Chip key={tag} className={classes.chipRoot} style={getStyle(tag)} label={tag} />)
                    }
                  </Box>
                  <Typography className={classes.typoRoot} variant="h6">
                    {post.frontmatter.date}
                  </Typography>
                </Box>
              </header>
              <Paper>
                <Img fluid={imgSrc} />
              </Paper>
              <section
                dangerouslySetInnerHTML={{ __html: post.html }}
                itemProp="articleBody"
              />
            </article>
          </Paper>
          <nav className="blog-post-nav">
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <TagList />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(
      fields: { slug: { eq: $slug}}) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
