import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import axios from 'axios'
import './signUp.css'

// TODO: 
// fix phone number
// onclick function --> signUp
// REDIRRECT to home page
// gender value
// password variant

const SignUp = () => {

	const classes = useStyles()

	const [userInfo, setUserInfo] = useState({
		fname: '',
		lname: '',
		email: '',
		age: '',
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
			age: userInfo.age,
			phone: userInfo.phone,
			gender: userInfo.gender,
			dob: selectedDate
		}

		// route from backend
		axios
			.post(`route`, data)
			.then(res => {
				console.log(res)
			})
			.catch(err => {
				console.log(err)
			})
	}

	return (
		<>
			<form onSubmit={submitHandler} className='container'>

				<TextField className={classes.textField} label='First Name' type='text' name='fname' onChange={(e) => {setUserInfo({...userInfo, fname: e.target.value})}} variant='outlined' required/>

				<TextField className={classes.textField} label='Last Name' type='text' name='lname' onChange={(e) => {setUserInfo({...userInfo, lname: e.target.value})}} variant='outlined' required/>

				<TextField className={classes.textField} label='Age' type='number' name='age' onChange={(e) => {setUserInfo({...userInfo, age: e.target.value})}} variant='outlined' required/>

				<TextField className={classes.textField} label='Date Of Birth' type='date' name='dob' onChange={dateHandler} variant='outlined' InputLabelProps={{shrink: true}} required/>

				<TextField className={classes.textField} label='Email' type='email' name='email' onChange={(e) => {setUserInfo({...userInfo, email: e.target.value})}} variant='outlined' required/>

				<FormControl variant='outlined' className={classes.textField}>
					<InputLabel> Password </InputLabel>
					<Input
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
					/>
				</FormControl>

				<FormControl variant='outlined' className={classes.textField}>
					<InputLabel> Gender </InputLabel>
					<Select
						value={userInfo.gender}
						onChange={(e) => {setUserInfo({...userInfo, gender: e.target.value})}}
						label='Gender'
						required
					>
						<MenuItem> Female </MenuItem>
						<MenuItem> Male </MenuItem>
					</Select>
				</FormControl>

				<TextField className={classes.textField} label='Phone Number' type='text' name='phone' onChange={(e) => {setUserInfo({...userInfo, phone: e.target.value})}} variant='outlined' required/>

				<button 
					type='submit' 
					disabled={userInfo.fname === '' || userInfo.lname === '' || userInfo.email === '' || userInfo.password === '' ||userInfo.phone === '' || userInfo.gender === '' || userInfo.dob === '' || userInfo.age === ''}
				> 
					Sign Up 
				</button>

			</form>
		</>
	)
}

export default SignUp

const useStyles = makeStyles(() => ({
	textField: {
		marginBottom: '10px',
	},
  }))