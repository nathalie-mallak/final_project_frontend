import React from 'react';
import './sidebar.css';
import {Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom';

const SideBar = () => {
	const history = useHistory();
	return (
		<div className='sidebar-container'>
			<div className='button-container'>
				<div style={{margin: '20px 0'}}>
					<Button
						variant='contained'
						onClick={() => history.push('/admin/bouquets')}
					>
						Predefined Bouquet
					</Button>
				</div>
				<div style={{marginBottom: '20px'}}>
					<Button variant='contained' onClick={() => history.push('/admin')}>
						Home
					</Button>
				</div>
				<div style={{marginBottom: '20px'}}>
					<Button variant='contained'>Default</Button>
				</div>
				<div style={{marginBottom: '20px'}}>
					<Button variant='contained'>Default</Button>
				</div>
				<div style={{marginBottom: '20px'}}>
					<Button variant='contained'>Default</Button>
				</div>
				<div style={{marginBottom: '20px'}}>
					<Button variant='contained'>Default</Button>
				</div>
				<div style={{marginBottom: '20px'}}>
					<Button variant='contained'>Default</Button>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
