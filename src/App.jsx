import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Servicios from './pages/Servicios'

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/servicios' element={<Servicios />} />
					<Route path='/users' element={<h1>dwadwa</h1>} />
				</Routes>
			</Router>
		</>
	)
}

export default App
