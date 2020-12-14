import React, { useState } from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import FilterVintageIcon from '@material-ui/icons/FilterVintage'
import { TextField } from '@material-ui/core'

const Contact = () => {

    const classes = useStyles()

    const [email, setEmail] = useState('')
    const [inquiries, setInquiries] = useState('')

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handleInquiries = e => {
        setInquiries(e.target.value)
    }

    const submitHandler = e => {
        e.preventDefault()
    }

    return (
        <>
            <Header />

            <div className={classes.root}>
                <Grid container justify='space-evenly'>
                    <Grid item xs={8} sm={6}>
                        <form onSubmit={submitHandler} className='container'>

                            <p className='quote'> We will be happy to receive your inquiries and orders<span className='span'> <FilterVintageIcon size='small'/> </span> </p>
							
                            <TextField className={classes.textField} label='Email' type='email' name='email' value={email} onChange={handleEmail} variant='outlined' required/>
                            
                            <TextField className={classes.textField} label='Comment' type='text' name='comment' value={inquiries} onChange={handleInquiries} variant='outlined' required/>

                            <button
                                type='submit' 
                                className='buttonStyle'
                                disabled={email === '' || inquiries === ''}
                            >
                                Submit
                            </button> 
                        </form>
					</Grid>
					<Grid item xs={8} sm={4}>
						<div className='infoContainer'>
							<h3> Contact Us </h3>
							
							<div className='subDiv'> 
								<h5> From Lebanon </h5>
								<p className='p'> +96171234567 </p>
							</div>

							<div className='subDiv'> 
								<h5> Address </h5>
								<p className='p'> Baakline, Shouf, Lebanon </p>
							</div>

							<div className='subDiv'> 
								<h5> Mail Us </h5>
								<p className='p'> customerservice@flowersforyou.com </p>
							</div>
						</div>
					</Grid>
				</Grid>
			</div>
            <Footer />
        </>
    )
}

export default Contact

const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
	  border: '3px solid #BF5E66',
	  borderRadius: '30px',
      width: '94%',
      padding: '30px 0px',
	  justifyContent: 'center',
	  margin: '100px auto 100px',
    },
    textField: {
		marginBottom: '15px',
		fontSize: '11px'
	}
}))