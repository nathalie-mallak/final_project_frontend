import { GET_NOTECARD, ITEMS_LOADING } from '../actions/types'

const initialState = {
    noteCards: [],
    loading: false
}

const NoteCards = (state = initialState, action) => {

    switch(action.type) {
        case GET_NOTECARD:
            return {
                ...state,
                noteCards: action.payload,
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

export default NoteCards