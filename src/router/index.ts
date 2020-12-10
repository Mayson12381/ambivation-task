import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import InputView from '../views/InputView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'InputView',
    component: InputView,
  },
  {
    path: '/positives',
    name: 'PositivesView',
    component: () =>
      import(/* webpackChunkName: "positives" */ '../views/PositivesView.vue'),
  },
  {
    path: '/negatives',
    name: 'NegativesView',
    component: () =>
      import(/* webpackChunkName: "negatives" */ '../views/NegativesView.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
