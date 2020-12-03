import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Buttons from '../buttons/buttons'
import './start.css'
import { register } from '../../actions/authActions'
import { clearErrors } from '../../actions/errorActions'

import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import IconButton from '@material-ui/core/IconButton'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import MenuItem from '@material-ui/core/MenuItem'

// TODO: 
// fix phone number regex
// REDIRRECT to home page

const SignUp = props => {

	const classes = useStyles()
	const history = useHistory()

	SignUp.prototypes = {
		register: PropTypes.func.isRequired,
		isAuthenticated: PropTypes.bool,
		error: PropTypes.object.isRequired
	}

	const [userInfo, setUserInfo] = useState({
		fname: '',
		lname: '',
		email: '',
		phone: '',
		gender: '',
		dob: ''
	})

	const [values, setValues] = useState({
		password: '',
		showPassword: false
	})

	const [selectedDate, setSelectedDate] = useState(new Date('2020-10-17T21:11:54'))

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword })
	}

	const changePass = (prop) => (e) => {
		setValues({ ...values, [prop]: e.target.value })
	}

	const dateHandler = (date) => {
		setUserInfo({...userInfo, dob: date})
		setSelectedDate(date)
	}

	const submitHandler = (e) => {

		e.preventDefault()

		const data = {
			fname: userInfo.fname,
			lname: userInfo.lname,
			email: userInfo.email,
			password: values.password,
			phone: userInfo.phone,
			gender: userInfo.gender,
			dob: selectedDate
		}

		console.log(data)
		console.log('nat');

		// const data ={...userInfo,...values};
		props.register(data)
		// when created, we have to login --> dispatch login
	}	

	const registerHandler = () => {
		const { isAuthenticated } = props

		if(isAuthenticated) {
			history.push('/')
		}
	}

	return (
		<>
			<form onSubmit={submitHandler} className='container'>

				<p className='formTitle'> Create a New Account </p>

				<TextField className={classes.textField} label='First Name' type='text' name='fname' onChange={(e) => {setUserInfo({...userInfo, fname: e.target.value})}} variant='outlined' required/>

				<TextField className={classes.textField} label='Last Name' type='text' name='lname' onChange={(e) => {setUserInfo({...userInfo, lname: e.target.value})}} variant='outlined' required/>

				<TextField className={classes.textField} label='Date Of Birth' type='date' name='dob' onChange={dateHandler} variant='outlined' InputLabelProps={{shrink: true}} required/>

				<TextField className={classes.textField} label='Email' type='email' name='email' onChange={(e) => {setUserInfo({...userInfo, email: e.target.value})}} variant='outlined' required/>

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

				<TextField className={classes.textField} label='Gender' select name='gender' onChange={(e) => {setUserInfo({...userInfo, gender: e.target.value})}} value={userInfo.gender} variant='outlined' required> 
					<MenuItem value={1}> Female </MenuItem>
					<MenuItem value={2}> Male </MenuItem> 
				</TextField>

				<TextField className={classes.textField} label='Phone Number' type='text' name='phone' onChange={(e) => {setUserInfo({...userInfo, phone: e.target.value})}} variant='outlined' required/>

				<button
					type='submit' 
					className='buttonStyle'
					disabled={userInfo.fname === '' || userInfo.lname === '' || userInfo.email === '' || values.password === '' || userInfo.phone === '' || userInfo.gender === '' || userInfo.dob === ''}		onClick={registerHandler}
				>
					Create an Account
				</button>
			</form>
		</>
	)
}

const mapStateToProps = state => ({
	
	//got them from the reducer
	isAuthenticated: state.auth.isAuthenticated,
	error: state.error
})

export default connect(mapStateToProps, { register, clearErrors })(SignUp)

const useStyles = makeStyles(() => ({
	textField: {
		marginBottom: '15px',
	},
}))