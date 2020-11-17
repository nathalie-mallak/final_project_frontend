import { GET_ERRORS, CLEAR_ERRORS } from './types'

// return erros
export const returnErrors = (message, status, id = null) => {
    return {
        type: GET_ERRORS,
        payload: { message, status, id }
    }
}

// clear erros
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS,
    }
}