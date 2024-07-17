// component imports
import AppBar from '@components/AppBar'
import MovieList from '@components/Movie/List'

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
    </>
  )
}

export default list
