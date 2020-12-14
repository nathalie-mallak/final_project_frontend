import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import './aboutUs.css'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import FilterVintageIcon from '@material-ui/icons/FilterVintage'

const AboutUs = () => {
	const classes = useStyles()

	return (
		<>
			<Header />
			<div className={classes.root}>
				<h3> About Us </h3>					
				<p className='p'><span className='span'>Flowers For You </span> is a 10 years old flower shop located in the heart of Chouf. Talal opened a flower stand in 1997. Today, he decided to scale up his business and digitalize it. So he chose us! We then created an E-commerce website utilizing the latest web dev technologies to enhance the shop’s reputation and drive sales potential.
				<br/><br/>

				Propelled by our affection for flowers and energy about nature, it is our obsession to make creative and noteworthy plant and new flower courses of action. We trust that the best, freshest flowers deliver the most noteworthy presentations. 

				<br/><br/>
				<span className='span'>Flowers For You </span> is glad to give quality flowers and plants to our customers. Our retail premises opened in 2019. From that point forward, we have bloomed into a full administration flower specialist with both private and corporate customers. Our master staff is here to enable all customers to pick the best flowers and plants for all events and purposes </p>
			</div>
			<Footer />
		</>
	)
}

export default AboutUs


const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
	  border: '3px solid #BF5E66',
	  borderRadius: '30px',
      width: '94%',
      padding: '30px 40px',
	  justifyContent: 'center',
	  margin: '50px auto',
    }
}))