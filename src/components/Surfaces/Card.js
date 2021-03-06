import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        component="img"
        height="300"
        image={props.url}
        alt={props.alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.children}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" to="/app/games" component={Link}>
            Play Now!
        </Button>
      </CardActions>
    </Card>
  );
}
