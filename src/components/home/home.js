import React from 'react'
import Header from '../header/header'
import Slider from '../carousel/carousel'
import Footer from '../footer/footer'
import Group from '../cards/group'
import SimpleContainer from '../section/section'
import './home.css'

const Home = () => {
	return (
		<>
			<div className='home'>
				<Header />
				<Slider />
				<Group />
				<SimpleContainer/>
				<Footer/>
			</div>
		</>
	)
}

export default Home
