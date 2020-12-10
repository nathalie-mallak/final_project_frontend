import React ,{useState} from 'react'
import Maincard from './card'
import {Grid} from '@material-ui/core'
import Anniversary from '../../../anniversary'

export default function Cont() {
  const [cart , setCart] = useState([]);
  const addToCart = (Anniversary) =>{
    console.log('add to cart is successfully done')
    setCart([...cart,{...Anniversary}]);
  }
    const getAnniversary = (Anniversaryobj) =>{
        return(
            <Grid item xs={12} sm={4} md={3}>
                <Maincard {...Anniversaryobj}/>
            </Grid>
        )
    }
    return (
        <Grid container spacing={10}> 
            {Anniversary.map(Anniversaryobj => getAnniversary(Anniversaryobj))}           
        </Grid>
    )
}
