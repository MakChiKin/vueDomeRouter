import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import goodsList from '@/views/goodsList'
import title from '@/views/title'
import image from '@/views/image'
import cart from '@/views/cart'


Vue.use(Router)

export default new Router({

  mode:"history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
/*    {
      //路由地址
      path: '/goodsList/:goodsId/user/:goodsName',
      name: 'goodsList',
      // 组件变量
      component: goodsList
    }*/
    {
      //路由地址
      path: '/goodsList',
      name: 'goodsList',
      // 组件变量
      components: {
        default:goodsList,
        title:title,
        image:image
      },
      // 子路由
      children:[
        {
          path:'title',//注意这里不要加“/” 加斜杠会变成绝对地址
          name:"title",
          component:title
        },
        {
          path:'image',//注意这里不要加“/” 加斜杠会变成绝对地址
          name:"image",
          component:image
        }
      ]
    },
    //方法2-6用
/*    {
      path:'/cart',
      name:"cart",
      component:cart
    },*/
    //方法7用
    {
      path:'/cart/:cartId',
      name:"cart",
      component:cart
    }
  ]
})
