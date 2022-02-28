import { RouteRecordRaw } from 'vue-router';
import Home from './home'
import MainLayout from '@/layout/MainLayout/index.vue'
const frameIn: RouteRecordRaw = {
  path: '/',
  redirect: '/home',
  component: MainLayout,
  meta: { title: '首页' },
  children: [ Home ]
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