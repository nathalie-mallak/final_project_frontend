import React, { useState, useEffect, useRef, useCallback } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import { fade, makeStyles } from '@material-ui/core/styles'
import Nat from './nat'
import axios from 'axios'
import debounce from 'lodash.debounce'

const Search = props => {

	const { loadHandler } = props

	const classes = useStyles()
	
	const inputRef = useRef()

	const [ inputValue, setInputValue] = useState('')

	const searchRequest = useCallback(debounce((searchText) => {

		console.log('nat')

		axios
		.get(`/api/searchItems/${encodeURI(searchText)}`)
		.then((searchData) => {

			console.log(searchData)
			let responseKeys = Object.keys(searchData)
			let finalItems = []
	
			responseKeys.forEach(key => {
				const item = {
					id: key,
					name: searchData[key].name,
				}
				finalItems.push(item)
			})
			console.log(finalItems)
			loadHandler(finalItems)
		})

	}, 1000),[debounce])

    const searchHandler = (e) => {
		setInputValue(e.target.value)
		
		if(e.target.value == inputRef.current.value)  
		{
			return;
		}
		searchRequest(e.target.value)
	}

	// const names = ['Hi', 'hey', 'hello']

	// const dynamicSearch = () => {
	// 	return getFlowers.filter(item => item.toLowerCase().includes(inputValue.toLowerCase()))
	// }


		

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
					value={inputValue}
					ref={inputRef}
				/>
			</div>
				{/* <Nat names={dynamicSearch()} /> */}
        </>
    )
}

export default Search

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
