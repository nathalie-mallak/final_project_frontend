import { SEARCH_TEXT, ITEMS_LOADING } from '../actions/types'

const initialState = {
    text: '',
    loading: false
}

const searchText = (state = initialState, action) => {

    switch(action.type) {
        
        case SEARCH_TEXT:
            return {
                ...state,
                text: action.payload,
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

export default searchText