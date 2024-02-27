import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Servicios from './pages/Servicios'

import About from './pages/About'
import Contacto from './pages/Contacto'
import Pokemons from './pages/Pokemons'

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/pokemons' element={<Pokemons />} />
					<Route path='/servicios' element={<Servicios />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contacto />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
