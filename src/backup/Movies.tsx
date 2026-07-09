import TextField from '@/components/TextField'
import Button from '@/components/Button'
import { useState } from 'react'
import axios from 'axios'
import { Link, useLoaderData } from 'react-router'
//import { User } from '@/routes/loaders'
import { delay } from '@/utils'

export interface ResponseData {
  Response: 'True' | 'False' // string
  Search?: Movie[]
  totalResults?: string
  Error?: string
}
export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export default function Movies() {
  const [searchText, SetSearchText] = useState('')
  const [movies, setMovies] = useState<Movie[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const user = useLoaderData<User>()

  async function fetchMovies(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    await delay(1500) //loading 확인을 위한 개발코드
    const { data } = await axios.get<ResponseData>(
      `https://omdbapi.com?apikey=7035c60c&s=${searchText}`
    )
    setIsLoading(false)
    if (data.Response === 'True') {
      const { Search = [] } = data
      setMovies(Search)
      return
    }
    alert(data.Error)
    return
  }

  return (
    <>
      <h1>Movie Pages</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <form
        onSubmit={fetchMovies}
        className="flex items-center gap-3">
        <TextField
          value={searchText}
          onChange={e => SetSearchText(e.target.value)}
        />
        <Button
          type="submit"
          loading={isLoading}>
          검색
        </Button>
      </form>
      <ul className="flex flex-wrap gap-3">
        {movies.map(movie => {
          return (
            <li key={movie.imdbID}>
              <Link to={`/movies/${movie.imdbID}`}>
                <h3 className="max-w-[200px] truncate">{movie.Title}</h3>
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  width={200}
                  height={300}
                />
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
