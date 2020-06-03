const debounce = function(fn, wait){
   let _timeOut
   return function(){
       if(_timeOut) clearTimeout(_timeOut)
       
       _timeOut = setTimeout(()=>{
           fn.apply(this, arguments)
       },wait)
   }
}

import { onMounted } from 'vue'
export default {
   setup(){
      const _resize = ()=>{
         
      }
      window.addEventListener('resize',_resize)
      onMounted(()=>{
         console.log('onMou')
      })
      return {}
   }
}