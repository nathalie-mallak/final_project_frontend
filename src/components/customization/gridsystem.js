import React from 'react'
import {Grid} from '@material-ui/core'
import Cont from './content'

const Custom = () =>{
	return(
		<Grid container direction = "column">
			<Grid Item  container>
				<Grid Item xs={0} sm={2} md={2}></Grid>
				<Grid Item xs={12} sm={8} md={8}>
					<Cont/>
				</Grid>
				<Grid Item xs={0} sm={2} md={2}></Grid>

				
			</Grid>
			
	
		</Grid> 
	);


};




export default Custom;