import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home/home'
import SignUp from './components/signUp/signUp'
// import AboutUs from './components/aboutUs/aboutUs'
import Login from './components/login/login'
// import ContactUs from './components/contactUs/contactUs'

function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/signUp' component={SignUp} />
					{/* <Route exact path='/aboutUs' component={AboutUs} /> */}
					<Route exact path='/login' component={Login} />
					{/* <Route exact path='/contactUs' component={ContactUs} /> */}
				</Switch>
			</BrowserRouter>
		</>
	)
}

export default App;
