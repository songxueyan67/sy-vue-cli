import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/getUserList',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: '成功',
        data: ['男', '女']
      }
    }
  }
] as MockMethod[]