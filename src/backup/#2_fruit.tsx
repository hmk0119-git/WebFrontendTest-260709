import { useState } from 'react'

function getFruitCount(fruits: string[]) {
  return fruits.length
}

export default function App() {
  const [fruits, setFruits] = useState<string[]>([])
  const [fruitName, setFruitName] = useState('')
  const fruitCount = getFruitCount(fruits)

  function addFruit() {
    setFruits([fruitName, ...fruits])
    setFruitName('')
  }

  return (
    <>
      <input
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
