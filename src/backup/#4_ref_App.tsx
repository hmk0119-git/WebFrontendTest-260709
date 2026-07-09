import { useState, useRef, useEffect } from 'react'

export default function App() {
  //파일이름과 같게 만드는게 일반적 규칙
  const inputRef = useRef<HTMLInputElement>(null) //요소참조 초기화, 아직은 참조할 데이터가 없음
  const [fruits, setFruits] = useState([]) //'사과', '바나나', '체리'
  const [fruitName, setFruitName] = useState('')
  const fruitCount = getFruitCount(fruits)

  useEffect(() => {
    inputRef.current?.focus() //옵셔널 체인. (?가 null, undefine이 아닌경우, 뒤에 구문 수행.
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
        ref={inputRef} //요소참조
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
