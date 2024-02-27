export default function Servicios() {
	return (
		<div className='hero min-h-screen bg-base-200'>
			<div className='hero-content flex-col lg:flex-row-reverse w-full'>
				<div className='card shrink-0 w-full max-w-3xl shadow-2xl bg-base-100'>
					<div className='card-body'>
						<h1 className='text-3xl font-bold text-center mb-4'>
							Servicios Pokémon
						</h1>
						<p className='text-lg mb-4'>
							Descubre los increíbles servicios que ofrecemos para entrenadores
							Pokémon
						</p>
						<div className='collapse collapse-arrow bg-base-200'>
							<input type='radio' name='my-accordion-2' defaultChecked />
							<div className='collapse-title text-xl font-medium'>
								Tiendas Pokemon
							</div>
							<div className='collapse-content'>
								<p>
									Explora nuestras tiendas Pokémon, donde encontrarás una amplia
									variedad de productos para entrenadores Pokémon, incluyendo:
								</p>
								<ul className='list-disc ml-6'>
									<li>
										Todo tipo de Poké Balls para capturar Pokémon salvajes.
									</li>
									<li>
										Objetos especiales como pociones, superpociones y revivir
										para mantener a tus Pokémon en plena forma.
									</li>
									<li>
										Ropa y accesorios con los diseños más geniales de Pokémon.
									</li>
									<li>
										Figuras coleccionables y tarjetas de entrenador para
										expandir tu colección.
									</li>
								</ul>
								<br />
								<div className='flex justify-center'>
									<img
										src='https://media.timeout.com/images/105684311/image.jpg'
										className='max-w-full max-h-full rounded'
									/>
								</div>
								<div className='mt-4 flex justify-center'>
									<button className='btn btn-primary'>Saber más</button>
								</div>
							</div>
						</div>

						<div className='collapse collapse-arrow bg-base-200'>
							<input type='radio' name='my-accordion-2' />
							<div className='collapse-title text-xl font-medium'>
								Centros de Salud Pokémon
							</div>
							<div className='collapse-content'>
								<p>
									Visita nuestros Centros de Salud Pokémon para sanar y
									revitalizar a tus compañeros de batalla después de una intensa
									batalla. Ofrecemos:
								</p>
								<ul className='list-disc ml-6'>
									<li>
										Atención médica gratuita y de calidad para todos tus
										Pokémon.
									</li>
									<li>
										Personal amable y experimentado para cuidar de tus
										compañeros Pokémon.
									</li>
									<li>
										Una estancia confortable mientras tus Pokémon se recuperan.
									</li>
									<li>
										Servicios adicionales como entrenamiento y asesoramiento
										para entrenadores novatos.
									</li>
								</ul>
								<br />
								<div className='flex justify-center'>
									<img
										src='https://pm1.aminoapps.com/6295/87f9ca5c79af4525f4d669b54c40452739bcfb6e_00.jpg'
										className='max-w-full max-h-full rounded'
									/>
								</div>
								<div className='mt-4 flex justify-center'>
									<button className='btn btn-primary'>Saber más</button>
								</div>
							</div>
						</div>

						<div className='collapse collapse-arrow bg-base-200'>
							<input type='radio' name='my-accordion-2' />
							<div className='collapse-title text-xl font-medium'>
								Gimnasios Pokémon
							</div>
							<div className='collapse-content'>
								<p>
									Desafía a los líderes de gimnasio Pokémon para probar tu
									habilidad como entrenador. Nuestros gimnasios ofrecen:
								</p>
								<ul className='list-disc ml-6'>
									<li>
										Entrenadores expertos que te ayudarán a mejorar tus
										habilidades de batalla.
									</li>
									<li>
										Pokémon salvajes para entrenar y fortalecer a tu equipo.
									</li>
									<li>
										Equipos y campos de entrenamiento especializados para cada
										tipo de Pokémon.
									</li>
									<li>
										Recompensas exclusivas para aquellos que superen los
										desafíos de gimnasio.
									</li>
								</ul>
								<br />
								<div className='flex justify-center'>
									<img
										src='https://images.wikidexcdn.net/mwuploads/wikidex/1/18/latest/20180809183603/EP576_Gimnasio_de_Ciudad_Canal.jpg'
										className='max-w-full max-h-full rounded'
									/>
								</div>
								<div className='mt-4 flex justify-center'>
									<button className='btn btn-primary'>Saber más</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
