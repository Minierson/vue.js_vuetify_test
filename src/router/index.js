import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../Features/home/home.view.vue'
import LoginView from '../Features/login/login.view.vue'
import UsersView from '@/Features/home/Users/users.view.vue'
import UsersForm from '@/Features/home/Users/users.form.vue'
import OfficesView from '@/Features/home/Offices/offices.view.vue'
import OfficesForm from '@/Features/home/Offices/offices.form.vue'
import LevelsView from '@/Features/home/Levels/levels.view.vue'
import POIsView from '@/Features/home/POIs/POIs.view.vue'
import BeaconsView from '@/Features/home/Beacons/beacons.view.vue'
import RequestsView from '../Features/home/Requests/requests.view.vue'
import RequestTopicsView from '../Features/home/Request topics/requestTopic.view.vue'
import DomainsView from '../Features/home/Domains/domains.view.vue'
import DevicesView from '../Features/home/Devices/devices.view.vue'
import NotificationsView from '../Features/home/Notification group/notification.view.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      redirect: '/home/users',
      children: [
        {
          path: 'users',
          name: 'home.users',
          component: UsersView
        },
        {
          path: 'usersForm',
          name: 'home.usersForm',
          component: UsersForm
        },
        {
          path: 'offices',
          name: 'home.offices',
          component: OfficesView
        },
        {
          path: 'officesForm',
          name: 'home.officesForm',
          component: OfficesForm
        },
        {
          path: 'levels',
          name: 'home.levels',
          component: LevelsView
        },
        {
          path: 'POIs',
          name: 'home.POIs',
          component: POIsView
        },
        {
          path: 'beacons',
          name: 'home.beacons',
          component: BeaconsView
        },
        {
          path: 'requests',
          name: 'home.requests',
          component: RequestsView
        },
        {
          path: 'requestTopics',
          name: 'home.requestTopics',
          component: RequestTopicsView
        },
        {
          path: 'domains',
          name: 'home.domains',
          component: DomainsView
        },
        {
          path: 'devices',
          name: 'home.devices',
          component: DevicesView
        },
        {
          path: 'notifications',
          name: 'home.notifications',
          component: NotificationsView
        }
      ]
    }
  ]
})
