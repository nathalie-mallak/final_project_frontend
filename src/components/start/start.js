import React from 'react'
import Login from './login'
import SignUp from './signUp'
import Grid from '@material-ui/core/Grid'
import Header from '../header/header'

const Start = () => {

    return (
        <>
            <Header />

            <Grid container justify='space-evenly'>
                <Grid item xs={8} sm={3}>
                    <SignUp />
                </Grid>
                <Grid item xs={8} sm={3}>
                    <Login />
                </Grid>
            </Grid>
        </>
    )
}

export default Start
  
