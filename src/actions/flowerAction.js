import { GET_FLOWERS } from './types'
import axios from 'axios'

export const getFlowers = () => dispatch => {
	// like resolving a promise
	axios
		.get('/api/flowers')
		.then((res) => 
			dispatch({
				type: GET_FLOWERS,
				payload: res
			})
		)
		.catch((err) => {
			console.log(err)
		})
}