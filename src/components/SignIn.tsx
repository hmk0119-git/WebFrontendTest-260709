import { useState } from 'react'
import TextField from '@/components/TextField'
import Button from '@/components/Button'

export default function App() {
  //const { text, setText } = useState('hello, Props!')
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')

  function signIn(event) {
    event.preventDefault()
    console.log(id, pw)
  }

  return (
    <>
      <form onSubmit={signIn}>
        <TextField
          label="ID"
          placeholder="ID를 입력해주세요."
          type="text"
          value={id}
          onChange={e => {
            setId(e.target.value)
          }}
        />
        <TextField
          label="PW"
          type="password"
          placeholder="PW를 입력해주세요."
          value={pw}
          onChange={e => {
            setPw(e.target.value)
          }}
        />
        <Button type="submit">로그인</Button>
      </form>
    </>
  )
}
