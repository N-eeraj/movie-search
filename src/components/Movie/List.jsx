// react router imports
import { Link } from 'react-router-dom'

// component imports
import MovieCard from '@components/Movie/Card'

const List = ({ movies }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-10 max-w-screen-xl mx-auto sm:px-12 py-5">
      {movies.map(movie => <Link to={movie.imdbID} key={movie.imdbID}>
        <MovieCard {...movie} />
      </Link>)}
    </div>
  )
}

export default List
