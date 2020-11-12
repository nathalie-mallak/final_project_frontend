import { combineReducers } from 'redux'
import flowerReducer from './flowerReducer'

// when we have several reducers
export default combineReducers({
	flowers: flowerReducer
})