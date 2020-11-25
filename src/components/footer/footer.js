import React from 'react'
import './footer.css'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import MailIcon from '@material-ui/icons/Mail'
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import CopyrightIcon from '@material-ui/icons/Copyright'

const Footer = () => {
    
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <Grid container spacing={3} justify='center'>
                    <Grid item xs={8} sm={4}>
                        <h4 className='h4'>Raafat Nasrdine</h4>
                        <div className='d-flex justify-content-around'>
                            <a href="mailto:Raafatnasrdine@gmail.com"><MailIcon className='icons'/></a>
                            <a href="tel:+96176674225"><PhoneInTalkIcon className='icons'/></a>
                            <a href="https://www.linkedin.com/in/raafat-nasrldine"><LinkedInIcon className='icons'/></a>
                        </div>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                        <h4 className='h4'>Nathalie Mallak</h4>
                        <div className='d-flex justify-content-around'>
                            <a href="mailto:nathalie.mallak@gmail.com"><MailIcon className='icons'/></a>
                            <a href="tel:+96176466567"><PhoneInTalkIcon className='icons'/></a>
                            <a href="https://www.linkedin.com/in/nathalie-mallak"><LinkedInIcon className='icons'/></a>
                        </div>     
                    </Grid>
                    <Grid item xs={8} sm={4}>
                        <h4 className='h4'>Wissam Mahmoud</h4>
                        <div className='d-flex justify-content-around'>
                            <p><MailIcon className='icons'/></p>
                            <p><PhoneInTalkIcon className='icons'/></p>
                            <p><LinkedInIcon className='icons'/></p>
                        </div>        
                    </Grid>
                </Grid>
                <div id='copyright'>
                <p>Welcome To Our Gorgeous FlowerShop  <span><CopyrightIcon style={{fontSize: 16}}/>2020</span></p>
            </div>
            </div>
        </>
    )
}

export default Footer

const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
      backgroundColor: '#BF5E66',
      width: '99%',
      padding: '15px 0px 2px',
      marginBottom: '-13px',
      marginTop: '25px'
    }
}))