import React ,{useState}from 'react';
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
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Christmas from '../../../christmas'



export default function Maincard(props) {
//   const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const {avatarUrl,title,subtitle,description,imageUrl,details,price} = props;
  const [cart , setCart] = useState([]);
  
  
  

  // const addToCart = (Flower) =>{
  //   console.log('add to cart is successfully done')
  //   setCart([...cart,{...Flower}]);
  //   console.log(cart);
  //   console.log(cart.length);

   
   
  // }

  // const  removeFromCart = (FlowerToRemove) =>{
  //   console.log('remove from cart is successfully done')
  //   setCart(cart.filter((Flower) => Flower.id !== FlowerToRemove.id))
  //   console.log(cart);
  //   console.log(cart.length);
    
  // }

  return (
    <Card style = {{width:'230px'}}>
      <CardHeader
        avatar={
          <Avatar src = {avatarUrl}/>
        }
        title={title}
        subheader={subtitle}
        className="cardheader"
      />
      <CardMedia
        style = {{height:'200px'}}
        // className={classes.media}
        image={imageUrl}
      />
      <CardContent className="cardfooter">
        <Typography variant='body2' color='textSecondary' component='p' style={{color:'black'}}>
         {description}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p' style={{color:'#BF5E66'}}>
        {price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
        <Typography variant="body2" color="textSecondary" component="p" style={{color:"black"}}>
         {cart.length}
        </Typography>
        <IconButton
        //   className={clsx(classes.expand, {
        //     [classes.expandOpen]: expanded,
        //   })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>
           {details}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}