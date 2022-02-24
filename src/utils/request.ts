import { message } from 'ant-design-vue';
import Axios from 'axios'
import storage from 'store';
import { notification } from 'ant-design-vue'
const { VITE_BASE_URL } = import.meta.env;
const request = Axios.create({
  baseURL: VITE_BASE_URL as string,
  timeout: 15000 // 请求超时 20s
})

// 前置拦截器（发起请求之前的拦截）
request.interceptors.request.use((response) => {
  if (response.headers?.Authorization) {
    response.headers.Authorization = `Bearer ${storage.get('ACCESS_TOKEN')}`;
  }
  return response
}, (error) => {
  return Promise.reject(error)
})

// 后置拦截器（获取到响应时的拦截）
request.interceptors.response.use((response) => {
  let { code, data, msg } = response.data;
  let a = 401;
  switch (a) {
    case 0:
      return data
    case 1:
      notification.error({ message: msg });
      throw Error(msg);
    case 401:
      notification.error({ message: msg });
      throw Error(msg);
    default:
      return '不是正确的code';
  }
}, (error) => {
  console.log(error)
})

export default request;