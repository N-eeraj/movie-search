// react imports
import { useState } from 'react'

// react router imports
import { useSearchParams } from 'react-router-dom'

// tanstack query imports
import { useQuery } from '@tanstack/react-query'

// component imports
import AppBar from '@components/AppBar'
import MovieList from '@components/Movie/List'
import Loading from '@components/Loading'
import Error from '@components/Error'
import Pagination from '@components/Pagination'

// import omdb fetch function
import { useFetchList } from '@/useOMDb'

const list = () => {
  const [search, setSearch] = useState(null)
  const [type, setType] = useState(null)

  const [searchParams, setSearchParams] = useSearchParams()
  const page = Number(searchParams.get('p'))

  const setPage = (page=1) =>  setSearchParams(prev => {
      prev.set('p', page)
      return prev
    }, { replace: true })

  const handleSearch = ({ query, type, page }) => {
    setSearch(query.trim())
    setType(type)
    setPage(page)
  }

  const {
    data,
    error,
    isFetching,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ['movies', { search, type, page }],
    queryFn: useFetchList,
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
