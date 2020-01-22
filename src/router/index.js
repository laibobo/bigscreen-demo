import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/views/test/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/test',
      name:'Test',
      component:Test
    }
  ]
})
