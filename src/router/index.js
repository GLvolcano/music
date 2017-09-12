import Vue from 'vue'
import Router from 'vue-router'
import Ranking from 'components/ranking/ranking'
import Recommond from 'components/recommond/recommond'
import Search from 'components/search/search'
import Singer from 'components/singer/singer'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/recommond'
  },
  {
    path: '/recommond',
    component: Recommond
  },
  {
    path: '/singer',
    component: Singer
  },
  {
    path: '/ranking',
    component: Ranking
  },
  {
    path: '/search',
    component: Search
  }
  ]
})
