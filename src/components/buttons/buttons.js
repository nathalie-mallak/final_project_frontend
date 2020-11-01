import React from 'react'
import './buttons.css'

const Buttons = (props) => {

	const {
		type,
		text,
		color,
		width,
		fontSize,
		backgroundColor,
	} = props

	return (
		<button type={type}
			style={{color: color, fontSize: fontSize, width: width, backgroundColor: backgroundColor}}
			className='buttonStyle'
		>
			{text}
		</button>
	)
}

export default Buttons
