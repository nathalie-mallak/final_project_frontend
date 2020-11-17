import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home/home'
import SignUp from './components/signUp/signUp'
import Login from './components/login/login'
import Happy from './components/occasions/happy'
import Love from './components/occasions/love'
import Gratitude from './components/occasions/gratitude'
import Sympathy from './components/occasions/sympathy'
import Customization from './components/customization/customization'
import { loadUser } from './actions/authActions'

import store from './store'

function App() {

	store.dispatch(loadUser())

	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/signUp' component={SignUp} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/sympathy' component={Sympathy} />
					<Route exact path='/happy' component={Happy} />
					<Route exact path='/love' component={Love} />
					<Route exact path='/gratitude' component={Gratitude} />
					<Route exact path='/customization' component={Customization} />

					{/* do we need a dynamic route? */}
				</Switch>
			</BrowserRouter>
		</>
	)
}

export default App;
