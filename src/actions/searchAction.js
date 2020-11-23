import { SEARCH_TEXT, ITEMS_LOADING } from './types'
import axios from 'axios'

export const getSearchText = () => dispatch => {

    dispatch(setItemsLoading())

//     const queryParams =` ?orderBy='name'&equalTo='${searchText}'`

//     axios
//         .get(`/api/searchText${queryParams}`)
//         .then(res => {
//             return dispatch({
//                 type: SEARCH_TEXT,
//                 payload: res.data
//             })
//         })
//         .catch(err => console.log(err))
}

const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}