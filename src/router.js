import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Train from './views/Train.vue'
import Type from './views/Type.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/train',
      name: 'train',
      component: Train,
    },
    {
      path: '/type',
      name: 'type',
      component: Type,
    },
  ]
})
