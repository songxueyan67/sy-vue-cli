import request from '@/utils/request'
export type Type = 'image' | 'sms' | 'email'
interface Params {
  email?: string,
  mobile?: string
}

interface Result {
  randomStr: string;
  code: string;
  expireTime: number;
}


export default function getCaptcha(type: Type = 'image', params?: Params) {
  return request<Result>({
    method: 'get',
    url: `/code/${type}`,
    params,
  })
}