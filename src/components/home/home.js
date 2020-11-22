import React from 'react'
import ContactUs from '../contactUs/contactUs'
import AboutUs from '../aboutUs/aboutUs'
import Header from '../header/header'
import Slider from '../carousel/carousel'
import Footer from '../footer/footer'
import Group from '../cards/group'

const Home = () => {
	return (
		<>
			<Header />

			<section id='Carousel'>
				<Slider/>
			</section>

			<section>
				<Group/>
			</section>

			<section id='about'>
				<AboutUs />
			</section>

			<section>
				<Footer />
			</section>
			
		</>
	)
}

export default Home
