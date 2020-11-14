/*
 * @Author: your name
 * @Date: 2020-06-22 14:53:27
 * @LastEditTime: 2020-06-28 17:04:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3\src\api\menu.js
 */
export function getRouter() {
   const data = [
      {
         name: 'one', path: '/one', component: "main", meta: {
            title: '壹',
            icon: 'one'
         }, children: [
            {
               names: '一',
               name: 'onefirst', path: 'onefirst', meta: {
                  title: '壹的第一',
                  icon: 'first'
               }, component: "one/first/index"
            },
            {
               names: '二',
               name: 'onesecond', path: 'onesecond', meta: {
                  title: '壹的第二',
                  icon: 'second'
               }, component: "one/second/index"
            },
            {
               names: '三',
               hidden:true,
               name: 'onethird', path: 'onethird', meta: {
                  title: '壹的第三',
                  icon: 'third'
               }, component: "one/third/index"
            }
         ],
      },
      {
         name: 'two', path: '/two', component: "main", meta: {
            title: '贰',
            icon: 'two'
         }, children: [
            {
               names: '一一',
               name: 'twofirst', path: 'twofirst', meta: {
                  title: '贰的第一',
                  icon: 'first'
               }, component: "two/first/index"
            }
         ],
      },
      {

         name: 'three', path: '/three', component: "three/index", meta: {
            title: '叁',
            icon: 'three'
         }
      }
   ]
   return new Promise((resolve) => {
      resolve(data)
   })
} 
