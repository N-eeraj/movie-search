// util imports
import { capitalize } from '@/formatter'

const API_KEY = import.meta.env.VITE_API_KEY
const OMDB_ENDPOINT = `https://www.omdbapi.com/?apikey=${API_KEY}`

export const useFetchData = async ({ queryKey }) => {
  const id = queryKey[1]
  const response = await fetch(`${OMDB_ENDPOINT}&i=${id}`)
  const data = await response.json()
  if (data.Response === 'False')
    throw 'Movie not found'
  return data
}

export const useFetchList = async ({ queryKey }) => {
  const { search, type, page } = queryKey[1]
  const response = await fetch(`${OMDB_ENDPOINT}&s=${search}&type=${type}&page=${page}`)
  const data = await response.json()
  if (data.Response === 'False')
    throw `${capitalize(type)} not found`
  return data
}
