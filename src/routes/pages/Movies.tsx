import TextField from '@/components/TextField'
import Button from '@/components/Button'
import { Link, Outlet } from 'react-router'
import { useMovieStore } from '@/stores/movie'

export default function Movies() {
  const searchText = useMovieStore(s => s.searchText)
  const movies = useMovieStore(s => s.movies)
  const isLoading = useMovieStore(s => s.isLoading)
  const setSearchText = useMovieStore(s => s.setSearchText)
  const fetchMovies = useMovieStore(s => s.fetchMovies)

  async function _fetchMovies(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    fetchMovies()
  }

  return (
    <>
      <h1>Movies Page!!</h1>
      <form
        onSubmit={_fetchMovies}
        className="flex items-center gap-3">
        <TextField
          value={searchText}
          onChange={e => {
            console.log(e.target.value)
            setSearchText(e.target.value)
          }}
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
      <Outlet />
    </>
  )
}
