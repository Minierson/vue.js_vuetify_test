import HomeVue from './home.view.vue'

import UsersView from './Users/users.view.vue'
import UsersForm from './Users/users.form.vue'

import OfficesView from './Offices/offices.view.vue'
import OfficesForm from './Offices/offices.form.vue'

import LevelsView from './Levels/levels.view.vue'

import POIsView from './POIs/POIs.view.vue'

import BeaconsView from './Beacons/beacons.view.vue'

import RequestsView from './Requests/requests.view.vue'

import RequestTopicView from './Request topics/requestTopic.view.vue'

import DomainsView from './Domains/domains.view.vue'

import DevicesView from './Devices/devices.view.vue'

import NotificationView from './Notification group/notification.view.vue'

export default [
  {
    path: '/home',
    name: 'home',
    component: HomeVue,
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
        name: 'home.pois',
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
        path: 'requestTopic',
        name: 'home.requestTopic',
        component: RequestTopicView
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
        name: 'home.notifiactions',
        component: NotificationView
      }

    ]

  }
]
