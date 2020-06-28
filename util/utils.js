/*
 * @Author: your name
 * @Date: 2020-06-08 10:17:59
 * @LastEditTime: 2020-06-28 14:52:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3\util\utils.js
 */ 

import Side from '@/nav/index'

const deepCopy_ = (obj)=>{
   // console.log(typeof obj)
   if(typeof obj ==='object'){
      let new_ = Array.isArray(obj)?[]:{}

       Object.keys(obj).forEach(item=>{
         new_[item] = deepCopy (obj[item])
       })
      // console.log(new_)
       return new_
     
   }else{
     return obj
   }
 }



export const deepCopy =  deepCopy_

export const coverRouter = (data)=>{
    data.forEach(item=>{
      if(item.component){
        if(item.component === 'main'){
          //组件为 main 代表是展示在侧边栏的，只可折叠，不进路由跳转
          item.meta.title += '侧边'
          // item.component = (resolve)=> require(['@/nav/index'],resolve)
          
          item.component = Side
        }else{
          //进行路劲与指向的匹配处理
          item.component  = loadView(item.component)
          // console.log(item.component)
        }
      }

      if(item.children && item.children.length){
        coverRouter(item.children)
      }
    })

    return data
}

export const loadView = (view) => { // 路由懒加载
  return () =>  import(`@/views/${view}`) 
}


