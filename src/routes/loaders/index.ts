import { redirect } from 'react-router'
import type { LoaderFunctionArgs } from 'react-router'
import axios from 'axios'

interface User {
  name: string
  age: number
  gender: string
}

export function requiresAuth() {
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) {
    return /*{
      name: 'Henry',
      age: 66,
      gender: 'male'
    }*/
  }
  return redirect('/signin')
}

export function guestOnly() {
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) {
    return redirect('/')
  }
  return true
}

// http://localhost:5173/movies/tt12345678
export async function fetchMovieDetails({ params }: LoaderFunctionArgs) {
  const { movieId = '' } = params
  const { data } = await axios.get(
    `https://omdbapi.com?apikey=7035c60c&i=${movieId}`
  )
  return data
}
