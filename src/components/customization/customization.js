/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../header/header'
import './customization.css'
import SelectFlowers from '../select'
import { connect } from 'react-redux'
import { getFlowers } from '../../actions/flowerAction'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Button from '@material-ui/core/Button'

const Customization = (props) => 
{
	const classes = useStyles()

	const [expanded, setExpanded] = useState(false)

	const [baskets, setBaskets] = useState([])
	const [noteCards, setNoteCards] = useState([])

	//it is replaced by props
	// const [flowers, setFlowers] = useState([])

	const handleExpandClick = () => {
		setExpanded(!expanded)
	}

	useEffect(() => {
		axios
			.get('/api/baskets')
			.then((res) => {
				console.log(res)
				setBaskets(res.data)
			})
			.catch((err) => {
				console.log(err)
			})

			//saret bl reducer
		// axios
		// 	.get('/api/flowers')
		// 	.then((res) => {
		// 		console.log(res)
		// 		setFlowers(res.data)
		// 	})
		// 	.catch((err) => {
		// 		console.log(err)
		// 	})

		// it replaces the axios.get flowers method
		props.getFlowers()

		axios
			.get('/api/noteCards')
			.then((res) => {
				console.log(res)
				setNoteCards(res.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])
  
	return (
		<>
			<Header/>
			<h3> Where Flowers Bloom , So Does Hope </h3>
			<p> Let's first choose the basket </p>

			{/* getting the baskets */}
			{baskets.map( basket => (
				<Card className={classes.root} key={basket.id}>
					<CardHeader title={basket.title}/>
					<CardMedia
						className={classes.media}
						image={basket.image}
					/>
					<Button> Select </Button>
				</Card>
			))}

			{/* getting the flowers */}
			{props.flowers.map(flower => (
				<Card className={classes.root}>
					<CardHeader title={flower.title}/>
					<CardMedia
						className={classes.media}
						image={flower.image}
					/>
					<CardActions disableSpacing>
						<IconButton aria-label='add to favorites'>
							<FavoriteIcon />
						</IconButton>
						<IconButton
							className={clsx(classes.expand, {
							[classes.expandOpen]: expanded,
							})}
							onClick={handleExpandClick}
							aria-expanded={expanded}
							aria-label='show more'
						>
							<ExpandMoreIcon />
						</IconButton>
					</CardActions>
					<Collapse in={expanded} timeout='auto' unmountOnExit>
						<CardContent>
							<Typography paragraph>
								{flower.description}
							</Typography>
						</CardContent>
					</Collapse>
				</Card>
			))}

			<p> Let's now choose the flower arragement </p>
			<div className='designContainer'>
				<select>
					{SelectFlowers.map((item) => (
						<option>{item}</option>
					))}
				</select>
			</div>
		</>
	)
}

Customization.propTypes ={
	getFlowers: PropTypes.func.isRequired,
	flowers: PropTypes.array.isRequired
}
const mapStateToProps = state => ({
	flowers: state.flowers.items
})

export default connect(mapStateToProps, { getFlowers })(Customization)

const useStyles = makeStyles((theme) => ({
	root: {
	  maxWidth: 345,
	},
	media: {
	  height: 90,
	  paddingTop: '56.25%', // 16:9
	},
	expand: {
	  transform: 'rotate(0deg)',
	  marginLeft: 'auto',
	  transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	  }),
	},
	expandOpen: {
	  transform: 'rotate(180deg)',
	},
}))