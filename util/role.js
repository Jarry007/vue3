
// import {useStore} from 'vuex'
import Vuex from 'vuex'
// import {} from 'vue'
// console.log('Vuex',Vuex.useStore)
const data = {}

data.install = (app)=>{
   app.directive('hasRole',{
      mounted(el,binding){
         const {value} = binding
         // const admin_ = 'admin'
         // const yourRoles = 'user'
         const store = Vuex.useStore()
         console.log('stoer',store.getters)
         const yourRoles = store.state.token.role ? store.state.token.role:''
        if(value && value instanceof Array){      
           const bindValue = value
           const hasRole_ = bindValue.includes(yourRoles)
         //   const hasRole_ = bindValue.some(item=>{
         //      return item === admin_ || role_.includes(item)
         //   })

           if (!hasRole_) {
            el.parentNode && el.parentNode.removeChild(el)
          }
        }
      }
   })
}

export const hasRole = data
