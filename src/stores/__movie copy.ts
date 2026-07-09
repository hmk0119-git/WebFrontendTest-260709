import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import axios from 'axios'

interface ResponseSuccessData {
  Response: 'True'
  Search: Movie[]
  totalResults: string
}
interface ResponseFailureData {
  Response: 'False'
  Error: string
}
type ResponseData = ResponseSuccessData | ResponseFailureData

interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export const useMovieStore = create(
  combine(
    {
      searchText: '',
      movies: [] as Movie[],
      isLoading: false
    },
    (set, get) => {
      return {
        setSearchText(searchText: string) {
          set({ searchText })
        },
        async fetchMovies() {
          const { searchText } = get()
          set({ isLoading: true })
          const { data } = await axios.get<ResponseData>(
            `https://omdbapi.com?apikey=7035c60c&s=${searchText}`
          )
          // setIsLoading(false)
          set({ isLoading: false })
          if (data.Response === 'True') {
            const { Search } = data
            // setMovies(Search)
            set({ movies: Search })
            return
          }
          alert(data.Error)
          return
        }
      }
    }
  )
)
