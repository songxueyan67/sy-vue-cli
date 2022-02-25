import request from '@/utils/request'

export interface LoginParams {
  imageCode: string;
  password: string;
  randomStr: string;
  username: string;
}

export default function Login(params?: LoginParams) {
  return request({
    method: 'post',
    url: '/authorize/rest/token',
    params,
  });
}