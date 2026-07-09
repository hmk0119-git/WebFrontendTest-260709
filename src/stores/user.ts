import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

export const useUserStore = create(
  immer(
    combine(
      {
        user: {
          name: 'Katelyn',
          age: 65,
          address: {
            city: 'Seoul',
            emails: ['abc@gmail.com', 'xyz@gmail.com']
          }
        }
      },
      (set, get) => {
        return {
          setFirstEmail(newEmail: string) {
            const { user } = get()
            set(state => (state.user.address.emails[0] = newEmail))
          }
        }
      }
    )
  )
)
