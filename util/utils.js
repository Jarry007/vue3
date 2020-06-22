
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
        }else{
          //进行路劲与指向的匹配处理
          item.component  = loadView(item.component)
        }
      }

      if(item.children && item.children.length){
        coverRouter(item.children)
      }
    })

    return data
}

export const loadView = (view) => { // 路由懒加载
  return (resolve) =>  require([`@/views/${view}`], resolve)
}
//  const list  = [{s:'dd',d:'ee'},{p:'dd'}]

// const p = deepCopy(list)

// p[0].s = 'uuuu'
// console.log(list[0])
// console.log(p[0])
