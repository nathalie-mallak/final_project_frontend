/* eslint-disable import/no-anonymous-default-export */
import { GET_FLOWERS } from '../actions/types'

// the items that come from the get request
const initialState = {
	items: []
}

export default function(state = initialState, action) {
	switch(action.type) {
		case GET_FLOWERS:
			return {
				...state,
				items: action.payload
			};
		default: 
			return state;
	}
}