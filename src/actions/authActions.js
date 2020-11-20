import axios from 'axios'
import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/types'
import { returnErrors } from './errorActions'

// check token and load user
export const loadUser = () => (dispatch, getState) => {

    //user loading
    dispatch({ type: USER_LOADING })

    axios
        .get('/api/userLogin/admin', tokenConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch( returnErrors(err.response.data, err.response.status))
            dispatch({
                type: AUTH_ERROR,
            })
        })
}

// register user
export const register = (info) => dispatch => {

    //headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    axios
        .post('/api/userRegister', info, config)
        .then( res => dispatch ({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch( returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'))
            dispatch ({
                type: REGISTER_FAIL
            })
        })
}

// login user
export const login = ({email, password}) => dispatch => {

    // headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // request body
    const body = JSON.stringify({ email, password })

    axios
        .post('/api/userLogin', body, config)
        .then(res => dispatch ({
            type: LOGIN_SUCCESS,
            payload: res.data,
        }))
        .catch(err => {
            dispatch( returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'))
            dispatch({
                type: LOGIN_FAIL,
            })
        })
}

// logout user
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

//setup congif/headers
export const tokenConfig = getState => {

    // get token from localstorage
    const token = getState().auth.token

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // if token, add to headers
    if(token) {
        config.headers['x-auth-token'] = token
    }

    return config
}