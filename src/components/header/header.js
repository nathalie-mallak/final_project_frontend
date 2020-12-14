import React, { useState, Fragment } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import Search from '../search/search'
import { connect } from 'react-redux'
import { logout } from '../../actions/authActions'
import PropTypes from 'prop-types'
import logo from '../../image/logo2.png'

import { AppBar, Toolbar, Typography, Paper, Grow, Popper, MenuItem, MenuList, IconButton, Menu, fade, makeStyles }from '@material-ui/core'
import FilterVintageIcon from '@material-ui/icons/FilterVintage'
import MoreIcon from '@material-ui/icons/More'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
// import BouquetIcon from '../../image/FlowerIcon.png'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// TODO:
// welcome user

const Header = props => {
	const classes = useStyles()

	const [open, setOpen] = useState(false)
	const anchorRef = React.useRef(null)

	const { isAuthenticated, user } = props.auth

	const authLinks = (
		<Fragment> 
			<span>{ user ? `Welcome ${user.name}` : ''} </span>
			<Link onClick={props.logout} className='link' to='#'>
				Logout
			</Link>
		</Fragment>	
	)

	const guestLinks = (
		<Link to ='/start' className='link'>
			<AccountCircleIcon className={classes.icon} />
		</Link>
	)
  
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
					<MenuItem onClick={handleMenuClose}><Link to='/AnniversaryOccasions' className='sublink'> Anniversary </Link></MenuItem>
					<MenuItem onClick={handleMenuClose}><Link to='/BirthdayOccasions' className='sublink'> Birthday </Link></MenuItem>
					<MenuItem onClick={handleMenuClose}><Link to='/loveOccasions' className='sublink'> Valentine </Link></MenuItem>
					<MenuItem onClick={handleMenuClose}><Link to='/ChristmasOccasions' className='sublink'> Christmas </Link></MenuItem>
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
						<Link to='/about' className='sublink'> About Us </Link>
					</MenuItem>

					<MenuItem>
						<Link to='/contact' className='sublink'> Contact Us </Link>
					</MenuItem>

					<MenuItem className='sublink'>
						{ isAuthenticated ? authLinks : guestLinks }
					</MenuItem>
					<MenuItem>
						<Link to='/Basket' className='sublink'> </Link>
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
							<span><img src = {logo} id="logo"></img> </span>
						</Link>
					</Typography>

					<Search />

					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
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
									<MenuItem><Link to='/AnniversaryOccasions' className='sublink'> Anniversary </Link></MenuItem>
									<MenuItem><Link to='/BirthdayOccasions' className='sublink'> Birthday </Link></MenuItem>
									<MenuItem><Link to='/loveOccasions' className='sublink'> Valentine </Link></MenuItem>
									<MenuItem><Link to='/ChristmasOccasions' className='sublink'> Christmas </Link></MenuItem>
								</MenuList>
							</Paper>
							</Grow>
						)}
						</Popper>

						<Link to ='/customization' className='link'> Customize your order </Link>

						<Link to='/about' className='link'> About Us </Link>

						<Link to='/contact' className='link'> Contact Us </Link>

						{ isAuthenticated ? authLinks : guestLinks}
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
					<div><ShoppingCartIcon
					className='link'
						
					/></div>

				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
		</div>
	)
}

Header.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	auth: state.auth 
})

export default connect(mapStateToProps, { logout }) (Header)

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},

	bar: {
		// marginBottom: '20px',
		paddingBottom: '5px',
		paddingRight: '7px',
		backgroundColor: '#BF5E66'
	},

	title: {
		flexGrow: 1,
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
		  display: 'flex',
		},
		width: '58%',
		justifyContent: 'space-evenly',
		marginTop: '15px'
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
	},
	icon: {
		fontSize: '30px'
	}
  }))
  