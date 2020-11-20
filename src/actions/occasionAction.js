import { GET_OCCASIONS, ITEMS_LOADING } from './types'
import axios from 'axios'

export const getOccasions = props => dispatch => {

    dispatch(setItemsLoading())

    let type = props.match.params

    axios
        .get(`/api/occasions/${type}`)
        .then(res => {
            dispatch ({
                type: GET_OCCASIONS,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}

