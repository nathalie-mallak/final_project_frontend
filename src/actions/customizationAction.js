import { GET_FLOWERS, GET_BASKETS, ITEMS_LOADING } from './types'
import axios from 'axios'
import { returnErrors} from './errorActions'

export const getFlowers = () => dispatch => {

	dispatch(setItemsLoading())

	// like resolving a promise
	axios
		.get('/api/items/flowers')
		.then((res) => {
			dispatch ({
				type: GET_FLOWERS,
				payload: res.data
			})
		})
		.catch((err) => dispatch(returnErrors(err.response.data, error.response.status))
		)
}

export const getBaskets = () => dispatch => {
	 
	dispatch(setItemsLoading())

	axios
		.get('/api/items/baskets')
		.then((res) => {
			dispatch ({
				type: GET_BASKETS,
				payload: res.data
			})
		})
		.catch((err) => dispatch(returnErrors(err.response.data, error.response.status))
		)
}

export const setItemsLoading = () => {
	return {
		type: ITEMS_LOADING
	}
}