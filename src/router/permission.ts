import router from '@/router'
import NProgress from 'nprogress';
import storage from 'store'

router.beforeEach((to, from, next) => {
const token = storage.get('ACCESS_TOKEN');

  NProgress.start();
  if (to.matched.some((r) => r.meta.auth)) {
    if (token && token !== 'undefined') {
      next()
    } else {
      next({
        name: "Login",
        query: {
          redirect: to.fullPath
        }
      })
      NProgress.done();
    }
  } else {
    next();
  }
})