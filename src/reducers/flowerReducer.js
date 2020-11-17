import { GET_FLOWERS, ITEMS_LOADING } from '../actions/types'

// flowers that come from the get request
const initialState = {
	flowers: [],
	loading: false
}

const FlowerReducer = (state = initialState, action) => {
	switch(action.type) {
		case GET_FLOWERS:
			return {
				...state,
				flowers: action.payload,
				loading: false
			};
		case ITEMS_LOADING:
			return {
				...state,
				loading: true
			}
		default: 
			return state
	}
}

export default FlowerReducer