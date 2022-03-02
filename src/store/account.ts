import { defineStore } from 'pinia'
import Login, { LoginParams, LoginResult } from '@/api/account'
import storage from 'store'
import router from '@/router'

const defaultState = {
  userInfo: {}
}

const useAccountStore = defineStore('account', {
  state: () => {
    return { ...defaultState }
  },
  actions: {
    setToken(params: LoginResult) {
      storage.set('ACCESS_TOKEN', params.accessToken)
      storage.set('REFRESH_TOKEN', params.refreshToken);
    },
    // 登陆
    login(params: LoginParams) {
      return new Promise((resolve, reject) => {
        Login(params)
          .then((res) => {
            this.setToken(res);
            router.push({ path: '/' });
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // 退出登录
    logout() {
      storage.clearAll();
      router.push({ name: 'Login' });
    }
  }
})

export default useAccountStore;