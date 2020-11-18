import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import { loadUser } from './actions/authActions'
import store from './store'
import Main from './components/main/main'

function App() {

	store.dispatch(loadUser())

	return (
		<>
			<BrowserRouter>
				<div >
					<Main />
				</div>
			</BrowserRouter>
		</>
	)
}

export default App;
