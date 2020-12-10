import React ,{useState} from 'react'
import Maincard from './card'
import {Grid} from '@material-ui/core'
import Christmas from '../../../christmas'

export default function Cont() {
  const [cart , setCart] = useState([]);
  const addToCart = (Christmas) =>{
    console.log('add to cart is successfully done')
    setCart([...cart,{...Christmas}]);
  }
    const getChristmas = (Christmasobj) =>{
        return(
            <Grid item xs={12} sm={4} md={3}>
                <Maincard {...Christmasobj}/>
            </Grid>
        )
    }
    return (
        <Grid container spacing={10}> 
            {Christmas.map(Christmasobj => getChristmas(Christmasobj))}           
        </Grid>
    )
}
