import { useCountStore } from '@/stores/count'

export default function Child() {
  const count = useCountStore(state => state.count)
  const setCount = useCountStore(state => state.setCount)

  return (
    <>
      <h1>Child Component!</h1>
      <h2
        onClick={() => {
          setCount(count + 1)
        }}>
        Count: {count}
      </h2>
    </>
  )
}
