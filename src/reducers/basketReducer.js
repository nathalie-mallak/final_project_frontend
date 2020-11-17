import { GET_BASKETS, ITEMS_LOADING} from '../actions/types'

const initialState = {
    baskets: [],
    loading: false
}

const BasketReducer = (state= initialState, action) => {

    switch(action.type) {
        case GET_BASKETS:
            return {
                ...state,
                baskets: action.payload,
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

export default BasketReducer