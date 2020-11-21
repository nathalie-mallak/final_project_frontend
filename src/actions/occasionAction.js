import { GET_OCCASIONS, ITEMS_LOADING } from './types'
import axios from 'axios'

export const getHappyOccasions = () => dispatch => {

    dispatch(setItemsLoading())

    axios
        .get(`/api/occasions/happy`)
        .then(res => {
            dispatch ({
                type: GET_OCCASIONS,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const getLoveOccasions = () => dispatch => {

    dispatch(setItemsLoading())

    axios
        .get(`/api/occasions/love`)
        .then(res => {
            dispatch ({
                type: GET_OCCASIONS,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const getGratitudeOccasions = () => dispatch => {

    dispatch(setItemsLoading())

    axios
        .get(`/api/occasions/gratitude`)
        .then(res => {
            dispatch ({
                type: GET_OCCASIONS,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const getSympathyOccasions = () => dispatch => {

    dispatch(setItemsLoading())

    axios
        .get(`/api/occasions/sympathy`)
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

