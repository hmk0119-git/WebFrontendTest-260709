import { useCountStore } from '@/stores/count'

export default function Home() {
  const count = useCountStore(s => s.count)
  const double = useCountStore(s => s.double)
  const setCount = useCountStore(s => s.setCount)

  return (
    <>
      <h1> Home Page! </h1>
      <h2 onClick={() => setCount(count + 1)}>
        {count} / {double}{' '}
      </h2>
    </>
  )
}
