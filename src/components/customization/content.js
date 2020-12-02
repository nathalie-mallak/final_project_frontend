import React ,{useState} from 'react'
import Maincard from './card'
import {Grid} from '@material-ui/core'
import Flower from '../../flower'

export default function Cont() {
  const [cart , setCart] = useState([]);
  const addToCart = (Flower) =>{
    console.log('add to cart is successfully done')
    setCart([...cart,{...Flower}]);
  }
    const getFlower = (Flowerobj) =>{
      return(
        <Grid item xs={12} sm={4} md={3} >
          <Maincard  {...Flowerobj}/>
          </Grid>
      )
    }
    return (
        <Grid container spacing={10}>
           
           {Flower.map((flowerobj => getFlower(flowerobj)))}
          
        </Grid>
  
    )
}
