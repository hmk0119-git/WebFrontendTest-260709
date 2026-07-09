import { useState, useRef, useEffect } from 'react'

export default function App() {
  // const inputRef = { current: null }
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [fruits, setFruits] = useState<string[]>([])
  const [fruitName, setFruitName] = useState('')
  const fruitCount = getFruitCount(fruits)

  // useEffect(실행할함수, 의존성배열)
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  function getFruitCount(fruits: string[]) {
    return fruits.length
  }
  function addFruit() {
    setFruits([fruitName, ...fruits])
    setFruitName('')
  }

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={fruitName}
        onChange={event => {
          setFruitName(event.target.value)
        }}
        onKeyDown={event => {
          if (event.nativeEvent.isComposing) return
          if (event.key === 'Enter') addFruit()
        }}
      />
      <button
        onClick={() => {
          addFruit()
        }}>
        추가
      </button>
      <div>{fruitCount}개</div>
      <ul>
        {fruits.map(fruit => {
          return <li key={fruit}>{fruit}</li>
        })}
      </ul>
    </>
  )
}
