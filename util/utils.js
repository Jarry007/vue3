
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


//  const list  = [{s:'dd',d:'ee'},{p:'dd'}]

// const p = deepCopy(list)

// p[0].s = 'uuuu'
// console.log(list[0])
// console.log(p[0])
