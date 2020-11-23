import React, { useState, useEffect } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import InputBase from '@material-ui/core/InputBase'
import { fade, makeStyles } from '@material-ui/core/styles'
import { getSearchText } from '../actions/searchAction'

const Search = props => {
    const classes = useStyles()

    const [searchText, setSearchText] = useState('')

    const searchHandler = (e) => {
        setSearchText(e.target.value)
	}

	Search.propTypes = {
		getSearchText: PropTypes.func.isRequired,
		text: PropTypes.object.isRequired
	}

	// const dynamicSearch = () => {
	// 	return items.filter(item => item.toLowerCase().includes(searchText.toLowerCase()))
	// }

	// let filteredItems = props.getFlowers().filter((basket) => {
	// 	//if value not found
	// 	return basket.name.indexOf(props.searchText) !== -1
	// })

    useEffect (() => {

		props.getSearchText()
		
    }, [searchText])

    return (
        <>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                placeholder='Search…'
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={searchHandler}
                value={searchText}
                />
			</div>
			<ul>
				{/* {filteredItems.map((item) => {
					return <Item item={}
				})} */}
			</ul>
        </>
    )
}

const mapStateToProps = state => {
    const { searchText } = state
    return {
       text: searchText
    }
}

export default connect(mapStateToProps, { getSearchText }) (Search)

const useStyles = makeStyles((theme) => ({
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEs: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
    },
    inputRoot: {
		border: '1px solid #ced4da',
		borderRadius: '5px',
		height: '40px',
		color: 'inherit',
    },
    inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
    }
}))
