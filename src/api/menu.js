/*
 * @Author: your name
 * @Date: 2020-06-22 14:53:27
 * @LastEditTime: 2020-06-28 17:04:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3\src\api\menu.js
 */
export function getAdminRouter() {
   const data = [
      {
         name: 'one', path: '/one', component: "main",key:'one', meta: {
            title: '管理员菜单',
            icon: 'icon-zaixian'
         }, children: [
            {
               name: 'onefirst', path: 'onefirst', meta: {
                  title: 'xx管理',
                  icon: 'icon-pingjiacishu'
               }, component: "one/first/index",key:'oneonefirst'
            },
            {
               name: 'onesecond', path: 'onesecond', meta: {
                  title: 'yy管理',
                  icon: 'icon-weixin'
               }, component: "one/second/index",key:'oneonesecond'
            }
         ],
      },
      {
         name: 'two', path: '/two', component: "main",key:'two', meta: {
            title: '用户菜单',
            icon: 'icon-queshui'
         }, children: [
            {
               name: 'twofirst', path: 'twofirst', meta: {
                  title: 'aa管理',
                  icon: 'icon-huabanfuben'
               }, component: "two/first/index",key:"twotwofirst"
            },
            {
               name: 'twosecond', path: 'twosecond', meta: {
                  title: 'bb管理',
                  icon: 'icon-money'
               }, component: "two/first/index",key:"twotwosecond"
            }
         ],
      }
   ]
   return new Promise((resolve) => {
      resolve(data)
   })
} 

export function getUserRouter() {
   const data = [
      // {
      //    name: 'one', path: '/one', component: "main", meta: {
      //       title: '管理员菜单',
      //       icon: 'one',key:'one'
      //    }, children: [
      //       {
      //          name: 'onefirst', path: 'onefirst', meta: {
      //             title: 'xx管理',
      //             icon: 'first'
      //          }, component: "one/first/index",key:'oneonefirst'
      //       },
      //       {
      //          name: 'onesecond', path: 'onesecond', meta: {
      //             title: 'yy管理',
      //             icon: 'second'
      //          }, component: "one/second/index",key:'oneonesecond'
      //       }
      //    ],
      // },
      {
         name: 'two', path: '/two', component: "main",key:'two', meta: {
            title: '用户菜单',
            icon: 'two'
         }, children: [
            {
               name: 'twofirst', path: 'twofirst', meta: {
                  title: 'aa管理',
                  icon: 'first'
               }, component: "two/first/index",key:"twotwofirst"
            },
            {
               name: 'twosecond', path: 'twosecond', meta: {
                  title: 'bb管理',
                  icon: 'second'
               }, component: "two/first/index",key:"twotwosecond"
            }
         ],
      }
   ]
   return new Promise((resolve) => {
      resolve(data)
   })
} 
