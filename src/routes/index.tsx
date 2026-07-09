import { createBrowserRouter, RouterProvider } from 'react-router'
import { dynamic } from './dynamic'

//정적로딩에 적합한 자주 띄우는 페이지
import Home from './pages/Home'
//import About from './pages/About'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
//import NotFound from './pages/NotFound'
//import SignIn from './pages/SignIn'
import Todos from './pages/Todos'

import Default from './layouts/Default'
import { requiresAuth, guestOnly, fetchMovieDetails } from './loaders'

//자주 안띄우는 도적로딩에 적합한 페이지
//const Home = dynamic(() => import('./pages/Home'))
const About = dynamic(() => import('./pages/About'))
//const Movies = dynamic(() => import('./pages/Movies'))
//const MovieDetails = dynamic(() => import('./pages/MovieDetails'))
const NotFound = dynamic(() => import('./pages/NotFound'))
const SignIn = dynamic(() => import('./pages/SignIn'))
//const Todos = dynamic(() => import('./pages/Todos'))

const router = createBrowserRouter([
  {
    element: <Default />,
    children: [
      {
        path: '/', // http://localhost:5173
        element: <Home />
      },
      {
        path: '/about', // http://localhost:5173/about
        element: <About />
      },
      // {
      //   path: '/movies', // http://localhost:5173/movies
      //   loader: requiresAuth,
      //   element: <Movies />
      // },
      // {
      //   path: '/movies/:movieId', // http://localhost:5173/movies/tt12345678
      //   loader: fetchMovieDetails,
      //   element: <MovieDetails />
      // },
      {
        loader: requiresAuth,
        children: [
          {
            path: '/movies', // http://localhost:5173/movies
            element: <Movies />,
            children: [
              {
                path: '/movies/:movieId', // http://localhost:5173/movies/tt12345678
                loader: fetchMovieDetails,
                element: <MovieDetails />
              }
            ]
          },

          {
            path: '/todos',
            element: <Todos />
          }
        ]
      },
      {
        path: '/signin',
        loader: guestOnly,
        element: <SignIn />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
