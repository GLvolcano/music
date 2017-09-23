import Vue from 'vue'
import Router from 'vue-router'
import Ranking from 'components/ranking/ranking'
import Recommond from 'components/recommond/recommond'
import Search from 'components/search/search'
import Singer from 'components/singer/singer'
import SingerDetail from 'components/singer-detail/singer-detail'
import RankDetail from 'components/rank-detail/rank-detail'

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
    component: Singer,
    children: [{
      path: ':id',
      component: SingerDetail
    }]
  },
  {
    path: '/ranking',
    component: Ranking,
    children: [{
      path: ':id',
      component: RankDetail
    }]
  },
  {
    path: '/search',
    component: Search,
    children: [{
      path: ':id',
      component: SingerDetail
    }]
  }
  ]
})
