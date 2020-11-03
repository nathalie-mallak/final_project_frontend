import React from 'react'
import ContactUs from '../contactUs/contactUs'
import AboutUs from '../aboutUs/aboutUs'
import Header from '../header/header'
import { Carousel } from 'react-responsive-carousel'
import Wedding from '../../image/wedding.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Home = () => {
	return (
		<>
			<Header />
			<div className='homeContainer'>
			<div className='carousel'>
			{/* <Carousel>
				<div>
					<img src={Wedding} alt=''/>
					<p className="legend">Legend 1</p>
				</div>
				{/* <div>
					<img src="assets/2.jpeg" alt=''/>
					<p className="legend">Legend 2</p>
				</div>
				<div>
					<img src="assets/3.jpeg" alt=''/>
					<p className="legend">Legend 3</p>
				</div> */}
			{/* </Carousel>  */}
			</div>
			</div>

			<section id='about'>
				<AboutUs />
			</section>

			<section id='contact'>
				<ContactUs />
			</section>
			
		</>
	)
}

export default Home
