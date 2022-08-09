import {GetServerSideProps} from 'next'
import MovieCard from '../../components/movies/MovieCard'

export default function popularMovies({popMovies}) {
	return (
		<div className='mx-auto'>
			<h2 className='mx-auto text-center text-2xl font-semibold m-10 border-4 w-fit shadow-2xl p-6'>
				Popular Movies
			</h2>
			<MovieCard popMovies={popMovies} />
		</div>
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const baseUrl = `https://api.themoviedb.org/3/movie/`
	const results = await fetch(
		`${baseUrl}popular?api_key=${process.env.TMDB_API}`
	)
	let popMovies = await results.json()
	return {
		props: {
			popMovies
		}
	}
}
