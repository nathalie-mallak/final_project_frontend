import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/authActions'
import PropTypes from 'prop-types'

const Logout = () => {
    return (
        <>
            
        </>
    )
}

Logout.propTypes = {
    logout: PropTypes.func.isRequired
}

export default connect(null, { logout }) (Logout)
