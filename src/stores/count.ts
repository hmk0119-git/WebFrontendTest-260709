import { create } from 'zustand'
import {
  combine,
  subscribeWithSelector,
  persist,
  createJSONStorage,
  devtools
} from 'zustand/middleware'

interface State {
  count: number
  setCount: (newCount: number) => void
}

export const useCountStore = create(
  devtools(
    persist(
      subscribeWithSelector(
        combine(
          {
            count: 3,
            double: 6
          },
          set => {
            return {
              setCount(newCount) {
                set({
                  count: newCount
                })
              }
            }
          }
        )
      ),
      {
        name: 'Count Store',
        version: 1, //사용자환경에 저장되는 것이라 서버업데이트해도 반영안됨. 이때 버전을 변경하면 새로 업데이트 가능.
        storage: createJSONStorage(() => localStorage) //localStorage:로컬스토리지 전역, sessionStorage:세션스토리지
      }
    )
  )
)

//useCountStore.subscribe(선택자함수, 실행할함수)
useCountStore.subscribe(
  state => state.count,
  () => {
    const { count } = useCountStore.getState()
    useCountStore.setState({ double: count * 2 })
  }
)
/*export const useCountStore = create<State>((set, get) => {
  return {
    count: 7,
    setCount(newCount) {
      set({
        count: newCount
      })
    }
  }
}) */
