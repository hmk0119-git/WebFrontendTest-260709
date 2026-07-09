import Child from '@/components/Child'
import { useState } from 'react'

export default function Parent() {
  const [isActive, setIsActive] = useState(true)
  return (
    <>
      <h1>Parent Component!</h1>
      <button
        onClick={() => {
          setIsActive(!isActive)
        }}>
        토글
      </button>
      {isActive && <Child />}
    </>
  )
}
