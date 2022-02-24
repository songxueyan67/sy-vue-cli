import request from '@/utils/request'

export default function getCaptcha() {
  return request({
    method: 'get',
    url: `/code/image`,
  })
}