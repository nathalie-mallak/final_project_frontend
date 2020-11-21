import React from 'react'
import ContactUs from '../contactUs/contactUs'
import AboutUs from '../aboutUs/aboutUs'
import Header from '../header/header'
import Slider from '../carousel/carousel'

const Home = () => {
	return (
		<>
			<Header />
			<div className='homeContainer'>
				
			</div>

			<section id='about'>
				<AboutUs />
			</section>

			<section id='Carousel'>
				<Slider/>
			</section>

			<section id='contact'>
				<ContactUs />
			</section>
			
		</>
	)
}

export default Home
