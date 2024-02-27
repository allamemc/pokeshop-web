import Bulbasur from './Bulbasur'
import Charmander from './Charmander'
import Pikachu from './Pikachu'

export default function Pokemons() {
	return (
		<>
			<div className='flex pokemons-div'>
				<Pikachu />
				<Charmander />
				<Bulbasur />
			</div>
		</>
	)
}
