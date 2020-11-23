import React, { useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import Search from '../search'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { fade, makeStyles } from '@material-ui/core/styles'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import MoreIcon from '@material-ui/icons/MoreVert'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'

const Header = () => {
	const classes = useStyles()

	const [open, setOpen] = useState(false)
	const anchorRef = React.useRef(null)
  
	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen)
	}

	const [anchorEl, setAnchorEl] = useState(null)
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)
  
	const isMenuOpen = Boolean(anchorEl)
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)
  
	const handleProfileMenuOpen = (e) => {
		setAnchorEl(e.currentTarget)
	}
  
	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null)
	}

	const handleMenuClose = () => {
		setAnchorEl(null)
		handleMobileMenuClose()
	}
  
	const handleMobileMenuOpen = (e) => {
		setMobileMoreAnchorEl(e.currentTarget)
	}

	const menuId = 'primary-search-account-menu'
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<Paper className={classes.drpdown} >
				<MenuList>
					<MenuItem onClick={handleMenuClose}><Link to='/happyOccasions' className='sublink'> Happy </Link></MenuItem>
					<MenuItem onClick={handleMenuClose}><Link to='/gratitudeOccasions' className='sublink'> Gratitude </Link></MenuItem>
					<MenuItem onClick={handleMenuClose}><Link to='/loveOccasions' className='sublink'> Love </Link></MenuItem>
					<MenuItem onClick={handleMenuClose}><Link to='/sympathyOccasions' className='sublink'> Sympathy </Link></MenuItem>
				</MenuList>
			</Paper>
		</Menu>
	)

	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<Paper>
				<MenuList className={classes.drpdown}>
					<MenuItem onClick={handleProfileMenuOpen} >
						<p> Occasions </p>
					</MenuItem>

					<MenuItem>
						<Link to='customization' className='sublink'> Customize your order </Link>
					</MenuItem>

					<MenuItem>
						<a href='/#contact' className='sublink'> Contact Us</a>
					</MenuItem>

					<MenuItem>
						<a href='/#about' className='sublink'> About Us </a>
					</MenuItem>

					<MenuItem>
						<Link to='/start' className='sublink'> Get Started </Link>
					</MenuItem>
				</MenuList>
			</Paper>
		</Menu>
	)

	return (
		<div className={classes.root}>
			<AppBar position='static' className={classes.bar}>
				<Toolbar>
					<Typography className={classes.title} variant='h6' noWrap>
						<Link to='/' className='link'>
							Flowers For You
						</Link>
					</Typography>
		
					{/* <div className={classes.search}>
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
						/>
					</div> */}

					<Search />

					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						<div>
							<p
							ref={anchorRef}
							aria-controls={open ? 'menu-list-grow' : undefined}
							aria-haspopup='true'
							onClick={handleToggle}
							className='link'
							>
								Occasions
							</p>
							<Popper className="dropdown" open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
							{({ TransitionProps, placement }) => (
								<Grow
								{...TransitionProps}
								style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
								>
								<Paper>
									<MenuList autoFocusItem={open} id='menu-list-grow' className={classes.drpdown}>
										<MenuItem><Link to='/happyOccasions' className='sublink'> Happy </Link></MenuItem>
										<MenuItem><Link to='/gratitudeOccasions' className='sublink'> Gratitude </Link></MenuItem>
										<MenuItem><Link to='/loveOccasions' className='sublink'> Love </Link></MenuItem>
										<MenuItem><Link to='/sympathyOccasions' className='sublink'> Sympathy </Link></MenuItem>
									</MenuList>
								</Paper>
								</Grow>
							)}
							</Popper>
						</div>

						<Link to ='/customization' className='link'>
							Customize your order
						</Link>

						<a href='/#contact' className='link'> Contact Us </a>
						
						<a href='/#about' className='link'> About Us </a>

						<Link to ='/start' className='link'>
							Get Started
						</Link>
					</div>

					<div className={classes.sectionMobile}>
						<IconButton
						aria-label='show more'
						aria-controls={mobileMenuId}
						aria-haspopup='true'
						onClick={handleMobileMenuOpen}
						color='inherit'
						>
						<MoreIcon />
						</IconButton>
					</div>

				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
		</div>
	)
}

export default Header

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},

	bar: {
		marginBottom: '20px',
		padding: '15px 10px',
		backgroundColor: '#BF5E66'
	},

	title: {
		flexGrow: 1,
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
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
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
		  display: 'flex',
		},
		width: '65%',
		justifyContent: 'space-evenly'
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
		  display: 'none',
		},
	},
	drpdown: {
		backgroundColor: 'rgb(231, 165, 176)',
		border: '1px solid rgb(231, 165, 176)',
		color: 'white',
	}
  }))
  