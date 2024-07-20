// react router imports
import { useNavigate, useParams } from 'react-router-dom'

// tanstack query imports
import { useQuery } from '@tanstack/react-query'

// react icon imports
import { IoArrowBackOutline } from 'react-icons/io5'

// component imports
import Button from '@components/Button'
import MovieDetails from '@components/Movie/Details'
import Loading from '@components/Loading'
import Error from '@components/Error'

// import omdb fetch function
import { useFetchData } from '@/useOMDb'

const movie = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data, status, error } = useQuery({
    queryKey: ['movie', id],
    queryFn: useFetchData,
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
      <Button className="aspect-square" onClick={() => navigate(-1)}>
        <IoArrowBackOutline className="text-xl" />
      </Button>

      {view}
    </>
  )
}

export default movie
