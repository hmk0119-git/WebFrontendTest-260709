import { useState, useEffect } from 'react'

function getDouble(count: number) {
  return count * 2
}

export default function App() {
  const [count, setCount] = useState(0)
  const double = getDouble(count)

  useEffect(() => {
    console.log(`Double is ${double}`)
  }, [double, count]) //의존성함수

  return (
    <>
      <h1
        onClick={() => {
          setCount(count + 1)
        }}>
        {count} / {double}
      </h1>
    </>
  )
}
