import React ,{useState} from 'react'
import Maincard from './card'
import {Grid} from '@material-ui/core'
import Valentine from '../../../valentine'

export default function Cont() {
  const [cart , setCart] = useState([]);
  const addToCart = (Valentine) =>{
    console.log('add to cart is successfully done')
    setCart([...cart,{...Valentine}]);
  }
    const getValentine = (Valentineobj) =>{
        return(
            <Grid item xs={12} sm={4} md={3}>
                <Maincard {...Valentineobj}/>
            </Grid>
        )
    }
    return (
        <Grid container spacing={10}> 
            {Valentine.map(Valentineobj => getValentine(Valentineobj))}           
        </Grid>
    )
}
