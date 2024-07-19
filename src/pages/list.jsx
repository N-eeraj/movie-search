// react imports
import { useState } from 'react'

// tanstack query imports
import { useQuery } from '@tanstack/react-query'

// component imports
import AppBar from '@components/AppBar'
import MovieList from '@components/Movie/List'
import Loading from '@components/Loading'
import Error from '@components/Error'

const list = () => {
  const [search, setSearch] = useState(null)
  const [type, setType] = useState(null)
  const [page, setPage] = useState(1)

  const handleSearch = ({ query, type }) => {
    setSearch(query)
    setType(type)
    setPage(1)
  }

  const fetchMovies = async ({ queryKey }) => {
    const { search, type, page } = queryKey[1]
    const apiKey = import.meta.env.VITE_API_KEY
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${search}&type=${type}&page=${page}`)
    const data = await response.json()
    if (data.Response === 'False')
      throw `${type} not found`
    return data
  }

  const {
    data,
    error,
    isFetching,
    isError,
  } = useQuery({
    queryKey: ['movies', { search, type, page }],
    queryFn: fetchMovies,
    initialData: { Search: [], totalResults: 0 },
    retry: 0,
  })

  const { Search: movies, totalResults } = data
  const pageCount = Math.ceil(totalResults / 10)

  return (
    <>
      <AppBar onSearch={handleSearch} />
      {isError && <Error message={typeof error === 'string' && error} />}
      <MovieList movies={movies} />
      {isFetching && <Loading className="w-12 mx-auto" />}
      Showing page: {page} of {pageCount}
    </>
  )
}

export default list
