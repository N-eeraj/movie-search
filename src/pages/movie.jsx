// react router imports
import { Link, useParams } from 'react-router-dom'

// tanstack query imports
import { useQuery } from '@tanstack/react-query'

// react icon imports
import { IoArrowBackOutline } from 'react-icons/io5'

// component imports
import Button from '@components/Button'
import MovieDetails from '@components/Movie/Details'
import Loading from '@components/Loading'
import Error from '@components/Error'

const movie = () => {
  const { id } = useParams()

  const fetchMovie = async () => {
    const apiKey = import.meta.env.VITE_API_KEY
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
    const data = await response.json()
    if (data.Response === 'False')
      throw 'Movie not found'
    return data
  }

  const { data, status, error } = useQuery({
    queryKey: ['movie', id],
    queryFn: fetchMovie,
    retry: 0,
  })

  const view = (() => {
    switch (status) {
      case 'pending':
        return <Loading className="max-w-32 border-8 mx-auto" />
      case 'success':
        return <MovieDetails {...data} />
      case 'error':
        return <Error message={typeof error === 'string' && error} />
    }
  })()

  return (
    <>
      <Link to="/">
        <Button className="aspect-square">
          <IoArrowBackOutline className="text-xl" />
        </Button>
      </Link>

      {view}
    </>
  )
}

export default movie
