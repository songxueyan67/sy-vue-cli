export default {
  path: '/user',
  name: 'User',
  component: () => import('@/views/user/index.vue'),
  meta: {
    title: '用户',
    auth: true,
  },
}
