import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/views/test/index'

import Layout from '@/views/layout/index'
import Member from '@/views/member/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/test',
      name:'Test',
      component:Test
    },
    {
      path:'/member',
      redirect:'/member/index',
      component:Layout,
      children:[
        {
          path: 'index',
          name: 'index',
          component: Member,
          meta:{
            title:'会员中心'
          }
        }
      ]
    }
  ]
})
