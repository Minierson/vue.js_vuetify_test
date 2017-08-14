import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginRoutes from '@/Features/login/login.routes'
// user folder
// import UsersView from '@/Features/Home/Users/users.view.vue'
// import UsersForm from '@/components/Users/users.form.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect (/* routeInfo */) {
      /*
        example:
        if (someService.loggedIn) {
          return '/foo';
        } else {
          return '/login';
        }
      */

      return '/login'
    }
  },
  ...LoginRoutes
]

const router = new VueRouter({
  routes
})

export default {
  router
}

