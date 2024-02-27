export default function Pikachu() {
	return (
		<div className='hero min-h-screen bg-base-100'>
			<div className='hero-content text-center '>
				<div className='hero min-h-screen '>
					<div className='hero-content flex-col lg:flex-col'>
						<div className='w-64 h-64 flex items-center justify-center'>
							<img
								src='https://seeklogo.com/images/P/pikachu-logo-619ACB690E-seeklogo.com.png'
								className='max-w-full max-h-full'
							/>
						</div>
						<div>
							<h1 className='text-5xl font-bold'>Pikachu</h1>
							<div className='divider divider-start'>
								<div className='badge badge-primary'>Eléctrico</div>
							</div>
							<p className='py-6'>
								El ágil Pikachu, con mejillas relucientes, desata chispas
								eléctricas en su búsqueda de aventuras y amistad.
							</p>
							<button className='btn btn-primary'>Comprar</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
