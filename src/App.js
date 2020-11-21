import React from 'react'
import { BrowserRouter as Router , useHistory} from 'react-router-dom'
import { loadUser } from './actions/authActions'
import Main from './components/main/main'
import { useSelector, useDispatch } from 'react-redux'

function App() {

	// const AuthState = useSelector(state => state.auth)
	// const history = useHistory()
	// 	if(AuthState.isAuthenticated){
	// 		history.push('/');
	// 	}
	
	const dispatch = useDispatch()
	dispatch(loadUser)

	return (
		<>
			<Router>
				<>
					<Main />
				</>
			</Router>
		</>
	)
}

export default App;
