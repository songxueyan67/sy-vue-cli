import Axios, { AxiosError } from 'axios'
import storage from 'store';
import { notification } from 'ant-design-vue'
const { VITE_BASE_URL } = import.meta.env;
const request = Axios.create({
  baseURL: VITE_BASE_URL as string,
  timeout: 15000 // 请求超时 20s
})

// 异常拦截处理器
const errorHandler = (error: AxiosError) => {
  const status = error.response?.status;
  switch (status) {
    case 400:
      error.message = '请求错误';
      break;
    case 401:
      error.message = '未授权，请登录';
      break;
    case 403:
      error.message = '拒绝访问';
      break;
    case 404:
      error.message = `请求地址出错: ${error.response?.config.url}`;
      break;
    case 408:
      error.message = '请求超时';
      break;
    case 500:
      error.message = '服务器内部错误';
      break;
    case 501:
      error.message = '服务未实现';
      break;
    case 502:
      error.message = '网关错误';
      break;
    case 503:
      error.message = '服务不可用';
      break;
    case 504:
      error.message = '网关超时';
      break;
    case 505:
      error.message = 'HTTP版本不受支持';
      break;
    default:
      break;
  }
  notification.error({ message: error.message });
  return Promise.reject(error);
};

// 前置拦截器（发起请求之前的拦截）
request.interceptors.request.use((response) => {
  let Authorization = response.headers?.Authorization
  Authorization = `Bearer ${storage.get('ACCESS_TOKEN')}`;
  return response
}, errorHandler)

// 后置拦截器（获取到响应时的拦截）
request.interceptors.response.use((response) => {
  let { code, msg } = response.data;
  switch (code) {
    case 0:
      return response.data
    case 1:
      notification.error({ message: msg });
      throw Error(msg);
    default:
      return '不是正确的code';
  }
}, (error) => {
  console.log(error)
})

export default request;