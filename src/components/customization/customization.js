import React, { useEffect, useCallback } from 'react'
import './customization.css'
import { SelectFlowers } from '../select'
import { connect } from 'react-redux'
import { getFlowers, getBaskets, getNoteCard, setItemsLoading } from '../../actions/customizationAction'
import PropTypes from 'prop-types'
import Header from '../header/header'
import Footer from '../footer/footer'
import Search from '../search/search'
import Custom from './gridsystem'

const Customization = props => 
{
	const loadItemsHandler = useCallback((items) => {
		setItemsLoading(items)

    }, [])

	Customization.propTypes = {
		getFlowers: PropTypes.func.isRequired,
		getBaskets: PropTypes.func.isRequired,
		getNoteCard: PropTypes.func.isRequired,
		flowers: PropTypes.object.isRequired,
		baskets: PropTypes.object.isRequired,
		noteCards: PropTypes.object.isRequired
	}

	useEffect(() => {

		props.getBaskets()
		props.getFlowers()
		props.getNoteCard()

	}, [])

	return (
		<>
		<Header/>
		<Custom/>
			{/* <Header/>
			<Search loadHandler={loadItemsHandler} />

			<h3> Where Flowers Bloom , So Does Hope </h3>
			<p> Let's first choose the basket </p> */}

			{/* getting the baskets */}
			{/* {props.baskets.baskets.map( basket => (
				<div> {basket.name} </div>
			))} */}

			{/* getting the flowers */}
			{/* flower represents the state object, however flowers represent the array of flowers */}
			{/* {props.flowers.flowers.map(flower => {
				return <div> {flower.price} </div>
			})} */}
		
			{/* <p> Let's now choose the flower arragement </p>
			<div className='designContainer'>
				<select>
					{SelectFlowers.map((item) => (
						<option>{item}</option>
					))}
				</select>
			</div> */}
			<Footer />
		</>
	)
}

// it allows us to grap flowers from the state and map them into component
const mapStateToProps = state => { 
	const { flower } = state;
	const { basket } = state;
	const { noteCard } = state;

	return { 
		flowers: flower,
		baskets: basket,
		noteCards: noteCard
	}
}

export default connect(mapStateToProps, {getFlowers, getBaskets, getNoteCard})(Customization)
