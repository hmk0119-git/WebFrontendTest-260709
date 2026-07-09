import { useState } from 'react'

function getFruitCount(fruits: string[]) {
  return fruits.length
}

export default function App() {
  //파일이름과 같게 만드는게 일반적 규칙
  const [fruits, setFruits] = useState([]) //'사과', '바나나', '체리'
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
          setFruitName(event.target.value) //event.target input에 입력된값
        }}
        onKeyDown={event => {
          if (event.nativeEvent.isComposing) return //mac os chrome브라우저에서 문제발생. 한글사용시 글씨가 중간에 잘려서 여러개 표시되는 문제
          if (event.key === 'Enter') addFruit()
        }}
      />
      <button
        onClick={() => {
          addFruit()
        }}>
        추가
      </button>
      <div> {fruitCount}개</div>
      <ul>
        {fruits.map(fruit => {
          return <li key={fruit}>{fruit}</li>
        })}
      </ul>
    </>
  )
}
