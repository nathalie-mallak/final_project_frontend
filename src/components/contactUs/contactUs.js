import React from 'react'
import './contactUs.css'

// add media icons

const ContactUs = () => {

	return (
		<>
			<div className='contactContainer'>
				<div className='infoContainer'>
					<h2> Call Us </h2>

					<p> We will be happy to receive your inquiries and orders </p>

					<div className='subDiv'> 
						<h4> From Lebanon </h4>
						<p> +96176466567 </p>
					</div>

					<div className='subDiv'> 
						<h4> Address </h4>
						<p> Hamra-Street, Beirut, Lebanon </p>
					</div>

					<div className='subDiv'> 
						<h4> Mail Us </h4>
						<p> customerservice@flowersforyou.com </p>
					</div>
				</div>
			</div>
		</>
	)
}

export default ContactUs