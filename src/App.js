import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import Main from './components/main/main'

function App() {
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
