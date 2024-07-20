// react imports
import { useState } from 'react'

// tanstack query imports
import { useQuery } from '@tanstack/react-query'

// component imports
import AppBar from '@components/AppBar'
import MovieList from '@components/Movie/List'
import Loading from '@components/Loading'
import Error from '@components/Error'
import Pagination from '@components/Pagination'

// util imports
import { capitalize } from '@/formatter'

const list = () => {
  const [search, setSearch] = useState(null)
  const [type, setType] = useState(null)
  const [page, setPage] = useState(1)

  const handleSearch = ({ query, type }) => {
    setSearch(query.trim())
    setType(type)
    setPage(1)
  }

  const fetchMovies = async ({ queryKey }) => {
    const { search, type, page } = queryKey[1]
    const apiKey = import.meta.env.VITE_API_KEY
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${search}&type=${type}&page=${page}`)
    const data = await response.json()
    if (data.Response === 'False')
      throw `${capitalize(type)} not found`
    return data
  }

  const {
    data,
    error,
    isFetching,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ['movies', { search, type, page }],
    queryFn: fetchMovies,
    initialData: { Search: [], totalResults: 0 },
    retry: 0,
    refetchOnWindowFocus: false,
  })

  const { Search: movies, totalResults } = data

  return (
    <>
      <AppBar onSearch={handleSearch} />
      {isFetching && <Loading className="w-12 mx-auto" />}
      {isError && <Error message={typeof error === 'string' && error} />}
      {
        (!isFetching && isSuccess) &&
        <>
          <MovieList movies={movies} />
          <Pagination
            page={page}
            totalResults={totalResults}
            className="max-w-screen-xl mx-auto sm:px-12 py-5"
            onPageChange={page => setPage(page)} />
        </>
      }
    </>
  )
}

export default list
