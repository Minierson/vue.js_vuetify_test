import Vue from 'vue'
import Router from 'vue-router'
// user folder
import UsersView from '@/Features/home/Users/users.view.vue'
// import UsersForm from '@/components/home/Users/users.form.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: UsersView
    }
  ]
})
