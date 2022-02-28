import request from '@/utils/request'

export interface LoginParams {
  username: string;
  password: string;
  imageCode: string;
  randomStr: string;
}

export interface LoginResult {
  accessToken: string;
  refreshToken: string;
}

export default function Login(params?: LoginParams) {
  return request<LoginResult>({
    method: 'post',
    url: '/authorize/rest/token',
    params,
  });
}