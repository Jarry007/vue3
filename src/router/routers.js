// import { resolve } from 'core-js/fn/promise';

/*
 * @Author: your name
 * @Date: 2020-06-03 17:57:43
 * @LastEditTime: 2020-06-28 13:37:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\src\router\routers.js
 */

import Side from '@/views/main/main.vue'
// const loadView = (view) => { // 路由懒加载
//   return () =>  import(`@/views/${view}`) 
// }
export default [
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    common:true,
    component: () => import('@/views/login.vue')
  },
  {
    path: '/404',
    name: '404',
    common:true,
    // component: Side,
    hidden: true,
    component: () => import('@/views/error/404.vue')
  },
  {
    path: '/500',
    name: '500',
    common:true,
    // component: Side,
    hidden: true,
    component: () => import('@/views/error/500.vue')
  },
  {
    path: '',
    component: Side,
    meta:{title:'首页'},
    children: [
      {
        name: 'Index',
        path: '/index',
        meta: { title: '首页1' },
        component: () => import('../views/index.vue')
      }
    ]

  },
  {
    path: '/sys',
    component: Side,
    meta:{title:'系统管理'},
    children: [
      { name: 'Role', path: 'role', meta: { title: '权限管理' }, component: () => import('../views/sys/role.vue') },
      { name: 'Menu', path: 'menu', meta: { title: '菜单管理' }, component: () => import('../views/sys/menu.vue') }
    ]
  },
  // {
  //   path: '/main',
  //   name: 'Main',
  //   // redirect:'/about',
  //   component: () => import('@/views/main/main.vue')
  // },
  // {
  //   path: '/testt',
  //   name: 'testt',
  //   component: Side,
  //   children: [
  //     {
  //       name: "test",
  //       path: '',
  //       component: () => import('@/components/test.vue')
  //     }
  //   ]
  //   // redirect:'/about',

  // },
  // {
  //   path: '/',
  //   name: 'Home',
  //   // redirect:'/about',
  //   component: Side
  // },


  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: Side,
  //   children: [
  //     {
  //       path: 'one',
  //       name: 'One',
  //       component: () => import('@/views/about/one.vue')
  //     }, {
  //       path: 'two',
  //       name: 'Two',
  //       component: () => import('@/views/about/two.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/index',
  //   name: 'Index',
  //   component: Side,
  //   children: [
  //     {
  //       path: '',
  //       name: 'index',


  //     }
  //   ]
  // },
  // {
  //   path: '/posts',
  //   name: 'Posts',
  //   component: Side,
  //   children: [
  //     {
  //       path: '',
  //       name: 'post',
  //       meta: { title: '文章页' },
  //       component: () => import('../views/posts.vue')
  //     }
  //   ]

  // }
]