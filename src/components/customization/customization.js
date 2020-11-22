import React, { useState, useEffect } from 'react'
import './customization.css'
import { SelectFlowers } from '../select'
import { connect } from 'react-redux'
import { getFlowers, getBaskets, getNoteCard } from '../../actions/customizationAction'
import PropTypes from 'prop-types'
import Header from '../header/header'
import Button from '../buttons/buttons'
import Footer from '../footer/footer'

import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const Customization = (props) => 
{
	const classes = useStyles()

	const [expanded, setExpanded] = useState(false)

	const handleExpandClick = () => {
		setExpanded(!expanded)
	}

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
			<h3> Where Flowers Bloom , So Does Hope </h3>
			<p> Let's first choose the basket </p>

			<div className='gridDiv'>
				{/* getting the baskets */}
				{props.baskets.baskets.map( basket => (
					<Grid container>
						<Grid item xs={6} sm={6} justify='flex-start'>
							<Card className={classes.root} key={basket.id}>
								<CardHeader title={basket.name}/>
								<CardMedia
									className={classes.media}
									image={basket.image}
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
											{basket.description}
										</Typography>
									</CardContent>
								</Collapse>
								<Button color= 'black' backgroundColor='pink'> Select </Button>
							</Card>
						</Grid>
					</Grid>
				))}
			</div>

			{/* getting the flowers */}
			{/* flower represents the state object, however flowers represent the array of flowers */}
			<div className='gridDiv'>
				{props.flowers.flowers.map(flower => {
					return <Grid container>
								<Grid item xs={6} sm={6}>	
								<Card className={classes.root}>
								<CardHeader title={flower.name}/>
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
								<Button> Select </Button>
								</Card>
								</Grid>
							</Grid> 
				})}
			</div>
		
			<p> Let's now choose the flower arragement </p>
			<div className='designContainer'>
				<select>
					{SelectFlowers.map((item) => (
						<option>{item}</option>
					))}
				</select>
			</div>
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

const useStyles = makeStyles((theme) => ({
	root: {
	  maxWidth: 345,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
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