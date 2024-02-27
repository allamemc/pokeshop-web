export default function Charmander() {
	return (
		<div className='hero min-h-screen bg-base-100'>
			<div className='hero-content text-center '>
				<div className='hero min-h-screen '>
					<div className='hero-content flex-col lg:flex-col'>
						<div className='w-64 h-64 flex items-center justify-center'>
							<img
								src='https://www.pngall.com/wp-content/uploads/14/Charmander-PNG-HD-Image.png'
								className='max-w-full max-h-full'
							/>
						</div>

						<div>
							<h1 className='text-5xl font-bold'>Charmander</h1>
							<div className='divider divider-start'>
								<div className='badge bg-orange-600'>Fuego</div>
							</div>
							<p className='py-6'>
								Charmander, con su cola ardiente, ilumina el camino con valentía
								y determinación en su viaje hacia la grandeza.
							</p>
							<button className='btn btn-primary'>Comprar</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
