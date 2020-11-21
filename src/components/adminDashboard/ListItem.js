import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import People from '@material-ui/icons/People';
import EmojiPeople from '@material-ui/icons/EmojiPeople';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {useHistory} from 'react-router-dom';

const MainListItems = () => {
	const history = useHistory();
	return (
		<div>
			<ListItem button onClick={() => history.push('/admin/dashboard')}>
				<ListItemIcon>
					<DashboardIcon />
				</ListItemIcon>
				<ListItemText primary='Dashboard' />
			</ListItem>
			<ListItem button onClick={() => history.push('/admin/Students')}>
				<ListItemIcon>
					<People />
				</ListItemIcon>
				<ListItemText primary='Students' />
			</ListItem>
			<ListItem button>
				<ListItemIcon>
					<EmojiPeople />
				</ListItemIcon>
				<ListItemText
					primary='Instructors'
					onClick={() => history.push('/admin/Instructors')}
				/>
			</ListItem>
			<ListItem button onClick={() => history.push('/admin/Assignments')}>
				<ListItemIcon>
					<AssignmentIcon />
				</ListItemIcon>
				<ListItemText primary='Assignments' />
			</ListItem>
			<ListItem
				button
				onClick={() => history.push('/admin/pendingInstructors')}
			>
				<ListItemIcon>
					<LayersIcon />
				</ListItemIcon>
				<ListItemText primary='Pending Instructors' />
			</ListItem>
			<ListItem button>
				<ListItemIcon>
					<LayersIcon />
				</ListItemIcon>
				<ListItemText primary='Integrations' />
			</ListItem>
		</div>
	);
};
export default MainListItems;
