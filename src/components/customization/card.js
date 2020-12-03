import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


export default function Maincard(props) {
//   const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const {avatarUrl,title,subtitle,description,imageUrl,details,price} = props;

  return (
    <Card style = {{width:"200px"}}>
      <CardHeader
        avatar={
          <Avatar src = {avatarUrl}/>
         
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia
        style = {{height:"200px"}}
        // className={classes.media}
        image={imageUrl}
        // title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" style={{color:"black"}}>
         {description}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" style={{color:"#BF5E66"}}>
        {price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
        //   className={clsx(classes.expand, {
        //     [classes.expandOpen]: expanded,
        //   })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
           {details}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}