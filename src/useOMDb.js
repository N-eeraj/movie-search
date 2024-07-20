// util imports
import { capitalize } from '@/formatter'

const apiKey = import.meta.env.VITE_API_KEY

export const useFetchData = async ({ queryKey }) => {
  const id = queryKey[1]
  const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
  const data = await response.json()
  if (data.Response === 'False')
    throw 'Movie not found'
  return data
}

export const useFetchList = async ({ queryKey }) => {
  const { search, type, page } = queryKey[1]
  const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${search}&type=${type}&page=${page}`)
  const data = await response.json()
  if (data.Response === 'False')
    throw `${capitalize(type)} not found`
  return data
}
