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
						<p> From Lebanon </p>
						<p> +96176466567 </p>
					</div>

					<div className='subDiv'> 
						<p> Address </p>
						<p> Hamra-Street, Beirut, Lebanon </p>
					</div>

					<div className='subDiv'> 
						<p> Mail Us </p>
						<p> customerservice@flowersforyou.com </p>
					</div>

					<div className='subDiv'> 
					<p> Follow Us </p>
					</div>
				</div>
			</div>
		</>
	)
}

export default ContactUs