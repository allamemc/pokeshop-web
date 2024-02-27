export default function Contacto() {
	return (
		<div className='hero min-h-screen bg-base-200'>
			<div className='hero-content flex-col lg:flex-row-reverse w-full'>
				<div className='card shrink-0 w-full max-w-96 shadow-2xl bg-base-100'>
					<form className='card-body'>
						<h1 className='text-3xl font-bold text-center'>Te escuchamos</h1>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Nombre</span>
							</label>
							<input
								type='text'
								placeholder='Juan'
								className='input input-bordered'
								required
							/>
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Email</span>
							</label>
							<input
								type='email'
								placeholder='juan@gmail.com'
								className='input input-bordered'
								required
							/>
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Tu mensaje</span>
							</label>
							<textarea
								className='textarea textarea-bordered'
								placeholder='...'></textarea>
						</div>

						<div className='form-control mt-6'>
							<button className='btn btn-primary'>Enviar</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
