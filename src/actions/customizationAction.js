import { GET_FLOWERS, GET_BASKETS, GET_NOTECARD, ITEMS_LOADING } from './types'
import axios from 'axios'

export const getFlowers = () => dispatch => {

	dispatch(setItemsLoading())

	// like resolving a promise
	axios
		.get('/api/flowers')
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
		.get('/api/baskets')
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
		.get('/api/noteCards')
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