import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Img from 'gatsby-image';
import {
    Grid, Card, CardActionArea, CardActions,
    CardContent, Typography
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        height: "100%",
    },
    actionRoot: {
        justifyContent: "center"
    }
});

const BlogCard = ({ posts }) => {
    const classes = useStyles();

    return (
        <div className='card-container'>
            <Grid container spacing={3}>
                {
                    posts && posts.map((post, index) => {
                        const title = post.frontmatter.title || post.fields.slug;
                        const imgSrc = (post.frontmatter.thumb && post.frontmatter.thumb.childImageSharp.fluid) || null;
                        const isLargeCard = index % 3 === 0;
                        const className = `post-card-container ${isLargeCard ? "large-card" : ""}`;
                        return (
                            <Grid key={post.fields.slug} item xs={12} sm={6} md={4}>
                                <Card className={classes.root} key={post.fields.slug}>
                                    <CardActionArea>
                                        <Img fluid={imgSrc} />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {title}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {post.frontmatter.description || post.excerpt}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions className={classes.actionRoot}>
                                        <Link to={post.fields.slug} itemProp="url">
                                            Read More
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    );
}

export default BlogCard;