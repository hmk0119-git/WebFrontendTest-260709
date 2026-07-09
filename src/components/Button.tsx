//import { Children, type ReactNode } from 'react'
import Loader from './Loader'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  loading?: boolean
  variant?: 'primary' | 'secondary' | 'danger'
}

export default function Button({
  variant = 'primary',
  loading,
  children,
  ...restProps
}: Props) {
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-400',
    secondary: 'bg-gray-300 text-white hover:bg-gray-400',
    danger: 'bg-red-500 text-white hover:bg-red-400'
  }
  return (
    <button
      {...restProps}
      className={`relative flex h-[36px] min-w-[70px] cursor-pointer items-center justify-center rounded-md ${variantClasses[variant]}`}>
      {loading ? <Loader color="white" /> : children}
    </button>
  )
}
