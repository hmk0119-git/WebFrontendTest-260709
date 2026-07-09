import { NavLink, useNavigate } from 'react-router'

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/movies', label: 'Movies' },
  { to: '/todos', label: 'Todos' },
  { to: '/signin', label: 'Sign In' }
]

export default function header() {
  const navigate = useNavigate()

  function signOut() {
    localStorage.removeItem('accessToken')
    navigate('/')
    return
  }

  return (
    <header className="flex gap-3">
      {navigations.map(nav => {
        return (
          <NavLink
            to={nav.to}
            key={nav.to}
            className={({ isActive }) => (isActive ? 'text-red-500' : '')}>
            {nav.label}
          </NavLink>
        )
      })}
      <button onClick={signOut}>Sign out</button>
    </header>
  )
}
