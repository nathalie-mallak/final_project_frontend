import { GET_OCCASIONS, ITEMS_LOADING } from './types'
import axios from 'axios'

// anniversary occasions
export const getAnniversaryOccasions = () => dispatch => {

    dispatch(setItemsLoading())

    axios
        .get(`/api/occasions/4`)
        .then(res => {
            dispatch ({
                type: GET_OCCASIONS,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

// valentine occasions
export const getLoveOccasions = () => dispatch => {

    dispatch(setItemsLoading())

    axios
        .get(`/api/occasions/1`)
        .then(res => {
            dispatch ({
                type: GET_OCCASIONS,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

// birthdays occasions
export const getBirthdayOccasions = () => dispatch => {

    dispatch(setItemsLoading())

    axios
        .get(`/api/occasions/2`)
        .then(res => {
            dispatch ({
                type: GET_OCCASIONS,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

// christmas occasions
export const getChristmasOccasions = () => dispatch => {

    dispatch(setItemsLoading())

    axios
        .get(`/api/occasions/3`)
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

