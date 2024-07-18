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

const movie = () => {
  const { id } = useParams()

  const fetchMovie = async () => {
    const apiKey = import.meta.env.VITE_API_KEY
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
    const data = await response.json()
    return data
  }

  const { data, status } = useQuery({
    queryKey: [id],
    queryFn: fetchMovie,
  })

  return (
    <>
      <Link to="/">
        <Button className="aspect-square">
          <IoArrowBackOutline className="text-xl" />
        </Button>
      </Link>

      {
        status === 'pending' ?
          <Loading className="max-w-32 border-8 mx-auto" /> :
          <MovieDetails {...data} />
      }
    </>
  )
}

export default movie
