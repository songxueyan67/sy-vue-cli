import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './router/index'
import '@/router/permission' // 路由权限

import 'virtual:svg-icons-register'

const app = createApp(App);
app.use(router)
app.use(createPinia()),
app.mount('#app')
