import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
	return (
		<div className='navbar bg-primary text-primary-content'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<div tabIndex='0' role='button' className='btn btn-ghost lg:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>
						</svg>
					</div>
					<ul
						tabIndex='0'
						className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52'>
						<li>
							<Link to='/'>Inicio</Link>
						</li>
						<li>
							<details>
								<summary>Pokemons</summary>
								<ul className='p-2 bg-primary '>
									<li>
										<Link to='/'>Pikachu</Link>
									</li>
									<li>
										<Link to='/'>Charmander</Link>
									</li>
									<li>
										<Link to='/'>Bulbasur</Link>
									</li>
								</ul>
							</details>
						</li>
						<li>
							<Link to='/servicios'>Servicios</Link>
						</li>
						<li>
							<Link to='/'>Sobre Nosotros</Link>
						</li>
						<li>
							<Link to='/'>Contacto</Link>
						</li>
					</ul>
				</div>
				<Link to='/' className='btn btn-ghost text-xl'>
					PokeShop
				</Link>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal px-1'>
					<li>
						<Link to='/'>Inicio</Link>
					</li>
					<li>
						<details>
							<summary>Pokemons</summary>
							<ul className='p-2 bg-primary '>
								<li>
									<Link to='/'>Pikachu</Link>
								</li>
								<li>
									<Link to='/'>Charmander</Link>
								</li>
								<li>
									<Link to='/'>Bulbasur</Link>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<Link to='/servicios'>Servicios</Link>
					</li>
					<li>
						<Link to='/'>Sobre Nosotros</Link>
					</li>
					<li>
						<Link to='/'>Contacto</Link>
					</li>
				</ul>
			</div>
			<div className='navbar-end'>
				<button className='btn btn-ghost btn-circle'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
						/>
					</svg>
				</button>
			</div>
		</div>
	)
}
