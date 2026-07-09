import { useState } from 'react' //Hook함수

export default function App() {
  //let count = 1
  const [count, setCount] = useState(1) //구조분해할당, 객체분해할당
  //count = getter 값을 얻는 readonly, setCount = setter함수

  function renderCountState() {
    if (count < 3) {
      return <p>Count가 3미만입니다</p>
    } else if (count > 3) {
      return <p>Count가 3보다 초과입니다</p>
    } else {
      return <p>Count가 3입니다</p>
    }
  }

  return (
    <>
      <h1
        id="title"
        className={count > 3 ? 'active' : ''} //클래스바인딩. 문자만 넣기
        style={{
          //          color: 'red', //정적인 것은 css에서 셋팅
          fontSize: '$(20 + count)px' //동적인 부분을 여기에 추가
        }} //스타일바인딩

        onClick={() => {
          const newCount = count + 1
          setCount(newCount) //비동기적 실행
          console.log(newCount)
        }}>
        Count: {count}
      </h1>
      //조건부연산자
      {count > 3 && <p>Count가 3보다 큽니다!</p>}
      //&&연산자는 가장 처음 만나는 false의 값을 반환.문자열만 반환가능. 이것을
      이용하여 조건부렌더링 가능. *false data: 숫자 0, 빈문자 '', false, null,
      Nan, undefined, 0n(bigint) //주의사항: (), [] //삼항연산자
      {count > 3 ? (
        <p>Count가 3보다 초과입니다</p>
      ) : (
        <p>Count가 3보다 이하입니다</p>
      )}
      //구문을 넣고 싶을때는 별도의 함수 구성
      {renderCountState()}
      //리스트렌더링
    </>
  )
}
