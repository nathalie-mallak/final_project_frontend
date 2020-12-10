import React ,{useState} from 'react'
import Maincard from './card'
import {Grid} from '@material-ui/core'
import Birthday from '../../../birthday'

export default function Cont() {
  const [cart , setCart] = useState([]);
  const addToCart = (Birthday) =>{
    console.log('add to cart is successfully done')
    setCart([...cart,{...Birthday}]);
  }
    const getBirthday = (Birthdayobj) =>{
        return(
            <Grid item xs={12} sm={4} md={3}>
                <Maincard {...Birthdayobj}/>
            </Grid>
        )
    }
    return (
        <Grid container spacing={10}> 
            {Birthday.map(Birthdayobj => getBirthday(Birthdayobj))}           
        </Grid>
    )
}
