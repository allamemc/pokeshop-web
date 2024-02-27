export default function Bulbasur() {
	return (
		<div className='hero min-h-screen bg-base-100'>
			<div className='hero-content text-center '>
				<div className='hero min-h-screen '>
					<div className='hero-content flex-col lg:flex-col'>
						<div className='w-64 h-64 flex items-center justify-center'>
							<img
								src='https://i.pinimg.com/originals/f5/1a/1a/f51a1a0ff4dbb03e953e5108fac88d8c.png'
								className='max-w-full max-h-full'
							/>
						</div>

						<div>
							<h1 className='text-5xl font-bold'>Bulbasur</h1>
							<div className='divider divider-start'>
								<div className='badge bg-green-600'>Planta</div>
							</div>
							<p className='py-6'>
								Bulbasur, con su bulbo en la espalda, es un amigo leal que nutre
								la naturaleza con su esencia vital.
							</p>
							<button className='btn btn-primary'>Comprar</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
