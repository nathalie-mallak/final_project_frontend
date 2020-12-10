import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../actions/authActions'
import { clearErrors } from '../../actions/errorActions'
import './start.css'

import { makeStyles } from '@material-ui/core/styles'
import { TextField, FormControl, IconButton, OutlinedInput, InputLabel, InputAdornment, Paper } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const Login = props => {

	const classes = useStyles()
	const history = useHistory()

	// to precise types
	Login.propTypes = {
		isAuthenticated: PropTypes.bool,
		error: PropTypes.object.isRequired,
		login: PropTypes.func.isRequired
	}

	const [email, setEmail] = useState('')
	const [values, setValues] = useState({
		password: '',
		showPassword: false
	})

	const handleEmail = (e) => {
		setEmail(e.target.value)
	}
	
	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword })
	}

	const changePass = (prop) => (e) => {
		setValues({ ...values, [prop]: e.target.value })
	}

	const submitHandler = (e) => 
	{
		e.preventDefault()
		
		const data = {
			email: email,
			password: values.password
		}
		
		// attempt to login
		props.login(data)
	}

	const loginHandler = () => {
		const { isAuthenticated } = props

		if(isAuthenticated) {
			history.push('/')
		}
	}

	return (
		<>
		<Paper elevation={3} className={classes.paper} >
			<form onSubmit={submitHandler} className='container'>

				<p className='formTitle'> Sign In </p>
				
				<TextField className={classes.textField} label='Email' type='email' name='email' value={email} onChange={handleEmail} variant='outlined' required/>

				<FormControl variant='outlined' className={classes.textField}>
					<InputLabel> Password </InputLabel>
					<OutlinedInput
						type={values.showPassword ? 'text' : 'password'}
						value={values.password}
						onChange={changePass('password')}
						name='password'
						endAdornment={
						<InputAdornment position='end'>
							<IconButton
								aria-label='toggle password visibility'
								onClick={handleClickShowPassword}
							>
							{values.showPassword ? <Visibility /> : <VisibilityOff />}
							</IconButton>
						</InputAdornment>
						}
						labelWidth={70}
					/>
				</FormControl>

				<button
					type='submit' 
					className='buttonStyle'
					disabled={email === '' || values.password === ''}
					onClick={loginHandler}
				>
					Sign In
				</button> 
			</form>
			</Paper>
		</>
	)
}

const mapStateToProps = state => ({
	//got them from the reducer
	isAuthenticated: state.auth.isAuthenticated,
	error: state.error
})

export default connect(mapStateToProps, { login, clearErrors })(Login)

const useStyles = makeStyles(() => ({
	textField: {
		marginBottom: '15px',
		fontSize: '11px'
	},
	paper: {
		padding: '20px 0px'
	}
  }))