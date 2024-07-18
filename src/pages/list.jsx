// component imports
import AppBar from '@components/AppBar'
import MovieList from '@components/Movie/List'
import Loading from '@components/Loading'

const list = () => {
  const handleSearch = ({ query, types }) => {
    console.log(query)
    console.log(types)
  }

  const { Search: movies, totalResults } = data

  return (
    <>
      <AppBar onSearch={handleSearch} />
      <MovieList movies={movies} />
      <Loading className="w-12 mx-auto" />
    </>
  )
}

export default list
