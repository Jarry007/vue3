/*
 * @Author: your name
 * @Date: 2020-06-08 10:17:59
 * @LastEditTime: 2020-06-28 14:52:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3\util\utils.js
 */ 

import Side from '@/views/main/main'
// import router from '../src/router'

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
          // item.meta.title += '侧边'
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

export function router2tree(route,parentPath){
  
  const res = Array.from(route,item=>{
    if(!item.common){

      // console.log('meta',item)
      item.title = item.meta.title || item.name
      item.key = parentPath?parentPath+ item.path:item.path
      if(item.children && item.children.length){
        item.children = router2tree(item.children,item.key)
      }
      if(item.meta) delete item.meta
      if(item.component) delete item.component
      if(item.name) delete item.name
    }

      return item
  })


  return res
}

export function _router2tree(route_,parentPath){
  const ary = []
  for(let i =0;i<route_.length;i++){
    if(route_[i].common) continue
    const obj = {
      title:route_[i].meta.title || 'name',
      key:parentPath?parentPath+route_[i].path:route_[i].path,
    }
    if(route_[i].children && route_[i].children.length) obj.children = _router2tree(route_[i].children,obj.key)
    ary.push(obj)
  }
  return ary
}


