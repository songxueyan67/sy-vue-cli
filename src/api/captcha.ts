import request from '@/utils/request'
type Type = 'image' | 'sms' | 'email'
interface Params {
  email: string,
  mobile: string
}

interface Result {
  code: string,
}

export default function getCaptcha(type: Type = 'image', params?: Params) {
  return request({
    method: 'get',
    url: `/code/${type}`,
    params,
  })
}