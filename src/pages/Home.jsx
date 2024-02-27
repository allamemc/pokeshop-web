import { Link } from 'react-router-dom'

export default function Home() {
	return (
		<>
			<div
				className='hero min-h-screen'
				style={{
					backgroundImage:
						'url(https://manybackgrounds.com/images/hd/pokemon-characters-acbjk9br1usgcb9t.jpg)',
				}}>
				<div className='hero-overlay bg-opacity-60'></div>
				<div className='hero-content text-center text-neutral-content'>
					<div className='max-w-md'>
						<h1 className='mb-5 text-6xl font-bold'>Bienvenido a PokeShop</h1>
						<p className='mb-5'>
							Captura a tus Pokémon favoritos en Pokeshop: ¡entrenamiento y
							aventura garantizados!
						</p>
						<Link to='/servicios' className='btn btn-primary'>
							Inicia tu Aventura
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}
