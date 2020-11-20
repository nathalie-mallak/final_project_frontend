import { GET_OCCASIONS, ITEMS_LOADING } from '../actions/types'

const initialState = {
    occasions: [],
    loading: false
}

const getOccasions = (state = initialState, action) => {

    switch(action.type) {
        
        case GET_OCCASIONS:
            return {
                ...state,
                occasions: action.payload,
                loading: false 
            }
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }
        default: 
            return state
    }
}

export default getOccasions