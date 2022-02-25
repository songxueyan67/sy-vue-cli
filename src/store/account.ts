import { defineStore } from 'pinia'
import Login from '@/api/account'

const defaultState = {
  userInfo: {}
}

export const useAccountStore = defineStore('account', {
  state: () => {
    return { ...defaultState }
  },
  actions: {
    async Login() {
      let params = {
        imageCode: '',
        password: '',
        randomStr: '',
        username: '',
      }
      await Login(params).then((res) => {
        console.log(res)
      })
    }
  }
})