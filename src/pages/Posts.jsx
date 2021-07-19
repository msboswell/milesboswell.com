import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Info from '../components/Info';

import posts from './dummy-post.js';

const PostCard = ({ post }) => (
  <Card>
    <CardActionArea>
      <CardMedia
        component="img"
        alt="Placeholder Image"
        height="140"
        image={post.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {post.title}
        </Typography>
        <Typography component="p">{post.excerpt}</Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
      <Button size="small" color="primary">
        Learn More
      </Button>
    </CardActions>
  </Card>
);

export default () => {
  return (
    <div>
      <Info title="Project Blog">
        In the future, I want this page to be a blog of some of the projects I
        am working on.
        <br />
        <br />
        Currently, I am displaying some simple cards representing project posts.
      </Info>
      <Grid container spacing={3} justify="space-around" alignItems="baseline">
        {posts.map(post => (
          <Grid item xs={12} sm={6} md={4} key={post.title}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
