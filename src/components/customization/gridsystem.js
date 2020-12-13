import React from 'react'
import {Grid} from '@material-ui/core'
import Cont from './content'

const Custom = () =>{
	return(
		<Grid direction= "column" spacing={4}>
			<Grid Item container>
				<Grid Item xs={0} sm={2} md={1}></Grid>
				<Grid Item xs={12} sm={8} md={10}>
					<Cont/>
				</Grid>
				<Grid Item xs={0} sm={2} md={0}></Grid>
			</Grid>
		</Grid> 
	)
}

export default Custom