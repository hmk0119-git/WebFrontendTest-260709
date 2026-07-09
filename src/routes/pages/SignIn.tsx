import { useState } from 'react'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import { useNavigate } from 'react-router'

export default function SignIn() {
  //const { text, setText } = useState('hello, Props!')
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const navigate = useNavigate()

  function signIn(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    if (id.trim() && pw.trim()) {
      const accessToken = 'c675a0ec-ccf4-44ca-b0df-cfbeb6892b18'
      localStorage.setItem('accessToken', accessToken)
      navigate('/')
    }
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
