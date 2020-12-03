import { combineReducers } from 'redux'
import flowerReducer from './flowerReducer'
import basketReducer from './basketReducer'
import errorReducer from './errorReducer'
import authReducer from './authReducer'
import occasionReducer from './occasionReducer'
// when we have several reducers
// flower should match the flower in the mapPropToState function
export default combineReducers({
	flower: flowerReducer,
	basket: basketReducer,
	error: errorReducer,
	auth: authReducer,
	occasion: occasionReducer
})