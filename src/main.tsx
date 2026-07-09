import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
import Router from './routes' //index.tsx생략가능

createRoot(document.getElementById('root')!).render(
  //"!"의미: ts script에서 type에 strict. getElementByIdroot의 Html element가 없으면 null반환. but, CreateRoot에서는 null반환이 불가하여, null이 없다는 것을 단언하는 키워드.
  <>
    <Router />
  </>
)
