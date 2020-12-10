import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './section.css'
import Back from '../../image/width.jpg'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));



export default function SimpleContainer() {
    
  return (
    <React.Fragment>
      <CssBaseline />
      <Container  className="cont" >
        <img src={Back} style={{width:"130vh",height:"30vh"}} />
        <Button
        variant="contained"
        color="secondary"
        className = "btn"
      >
        Join Us !
      </Button>
        <Button
        variant="contained"
        color="secondary"
        className = "btn2"
      >
        Read more
      </Button>
      <h3 classname="hoad">Upcoming Events</h3>
        <h5 classname="head">Waiting You!!</h5>
       
       <h1 className="h1"></h1>
      </Container>
    </React.Fragment>
  );
}