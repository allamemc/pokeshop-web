export default function About() {
	return (
		<div className='hero  h-screen'>
			<div className='flex flex-col mt-12 text-center hero-content'>
				<div className='max-w-ld'>
					<h1 className='text-5xl font-bold '>Nuestros Entrenadores</h1>
					<p className='py-6 '>
						Nuestros entrenadores Pokémon son expertos dedicados y apasionados.
					</p>
				</div>
				<div className='flex flex-col self-center justify-center w-full h-auto p-16 rounded-none animate-none gap-14  flex-clases'>
					<div className='flex self-center items-center justify-center w-full gap-8 flex-clases'>
						<div className='w-full rounded shadow-xl card card-compact bg-base-100'>
							<figure>
								<div
									className='profesor shifu w-1/2'
									style={{
										height: '300px',
									}}></div>
							</figure>
							<div className='card-body'>
								<h2 className='card-title'>Profesor Oak</h2>
								<p className='text-left'>
									Con un corazón noble, protege a los Pokémon con compasión y
									cuidado, mostrando que la verdadera grandeza radica en el amor
									y el respeto por todas las criaturas.
								</p>
							</div>
						</div>
						<div className='w-full rounded shadow-xl card card-compact bg-base-100'>
							<figure>
								<div
									className='profesor rockie'
									style={{ height: '300px' }}></div>
							</figure>
							<div className='card-body'>
								<h2 className='card-title'>Ash Ketchum</h2>
								<p className='text-left'>
									Con su carisma innato, lidera con sabiduría y valentía,
									inspirando a otros a alcanzar sus sueños Pokémon con pasión y
									determinación.
								</p>
							</div>
						</div>
						<div className='w-full rounded shadow-xl card card-compact bg-base-100'>
							<figure>
								<div
									className='profesor thai'
									style={{ height: '300px' }}></div>
							</figure>
							<div className='card-body'>
								<h2 className='card-title'>Misty</h2>
								<p className='text-left'>
									Experto en estrategia, desafía a sus oponentes con
									inteligencia y astucia, demostrando que la fuerza mental es
									tan crucial como la física en el mundo Pokémon.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
