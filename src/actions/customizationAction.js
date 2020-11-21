import { GET_FLOWERS, GET_BASKETS, GET_NOTECARD, ITEMS_LOADING } from './types'
import axios from 'axios'

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
		.catch((err) => {
			console.log(err)
		})
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
		.catch(err => {
			console.log(err)
		})
}

export const getNoteCard = () => dispatch => {

	dispatch(setItemsLoading())

	axios
		.get('/api/items/noteCards')
		.then(res => {
			dispatch ({
				type: GET_NOTECARD,
				payload: res.data
			})
		})
		.catch(err => {
			console.log(err)
		})
} 

export const setItemsLoading = () => {
	return {
		type: ITEMS_LOADING
	}
}