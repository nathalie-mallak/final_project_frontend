import React, { useEffect } from 'react'
import { getAnniversaryOccasions } from '../../actions/occasionAction'
import PropTypes from 'prop-types'
import './occasions.css'
import { connect } from 'react-redux'
import Header from '../header/header'
import Footer from '../footer/footer'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'

const AnniversaryOccasions = props => {

    const classes = useStyles()

    useEffect(() => {

        props.getAnniversaryOccasions()

    }, [])

    AnniversaryOccasions.propTypes = {
        occasions: PropTypes.object.isRequired,
        getAnniversaryOccasions: PropTypes.func.isRequired
    }

    return (
        <>
			<Header/>
            {props.occasions.occasions.map(occasion => (
				<Card className={classes.root} key={occasion.id}>
					<CardHeader title={occasion.name}/>
					<CardMedia
						className={classes.media}
						image={occasion.image}
					/>
					<p price={occasion.price}> </p>
					<Button> Buy Now </Button>
				</Card>
			))}
			<Footer/>
        </>
    )
}

const mapStateToProps = state => {
    const { occasion } = state
    return {
        occasions: occasion
    }
}

export default connect(mapStateToProps, { getAnniversaryOccasions }) (AnniversaryOccasions)

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