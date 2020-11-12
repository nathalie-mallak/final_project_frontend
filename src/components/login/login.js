import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Buttons from '../buttons/buttons'

import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import IconButton from '@material-ui/core/IconButton'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'

const Login = () => {

	const classes = useStyles()
	const history = useHistory()

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

		axios
			.post('/user/login', data)
			.then((res) => {
				console.log(res)
				// setEmail(res.data);
				// setValues(res.data)
				history.push('/')
			})
			.catch((err) => alert('wrong credentials'))
	}

	return (
		<>

			<form onSubmit={submitHandler} className='container'>

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

				<Buttons 
					type='submit' 
					text= 'Sign In'
					backgroundColor= 'pink'
					disabled={email === '' || values.password === ''}
				/> 
			</form>
		</>
	)
}

export default Login


const useStyles = makeStyles(() => ({
	textField: {
		marginBottom: '15px',
	},
  }))