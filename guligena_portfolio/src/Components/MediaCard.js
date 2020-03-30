import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  
  
  
  return (
    <Card  onClick={() => props.handleCardClicked(props.project)} style={{position: 'absolute', top: 320, left: props.project.position, backgroundColor: '#d8d8d8'}} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.project.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.project.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.project.des}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>

    
  );
}
