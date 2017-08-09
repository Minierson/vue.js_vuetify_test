import Vue from 'vue'
import Router from 'vue-router'
// user folder
import UsersView from '@/components/Users/users.view.vue'
import UsersForm from '@/components/Users/users.form.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: UsersView
    }
  ]
})
