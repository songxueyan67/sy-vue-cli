import { RouteRecordRaw } from 'vue-router';
import MainLayout from '@/layout/MainLayout/index.vue'

import Home from './home'
import User from './user'
const frameIn: RouteRecordRaw = {
  path: '/',
  redirect: '/user',
  component: MainLayout,
  meta: { title: '首页' },
  children: [ User, Home ]
}

const frameOut = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/system/Login.vue'),
    meta: {
      title: '登录'
    }
  },
]


export default [frameIn, ...frameOut]