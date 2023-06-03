import { defineStore } from 'pinia'
import { User } from '../types/users'

export const useUsersStore = defineStore('users', {
  state: (): User => ({ currentUserId: '' }),
  actions: {
    signUp(username: string, password: string) {
      console.log('🚀 ~ file: users.ts:8 ~ signup ~ username:', username)
      console.log('🚀 ~ file: users.ts:8 ~ signup ~ password:', password)
      //todo call backend
      this.currentUserId = (Math.random() * 100000).toFixed()
    },
    signIn(username: string, password: string) {
      //todo call backend
      console.log('🚀 ~ file: users.ts:14 ~ signIn ~ username:', username)
      console.log('🚀 ~ file: users.ts:14 ~ signIn ~ password:', password)
      this.currentUserId = (Math.random() * 100000).toFixed()
    },
    logOut() {
      //todo call backend
      this.currentUserId = ''
    }
  }
})
