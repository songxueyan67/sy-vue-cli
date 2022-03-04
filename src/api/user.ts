import request from "@/utils/request";

export function getUserList() {
  return request({
    method: 'get',
    url: '/api/getUserList'
  })
}