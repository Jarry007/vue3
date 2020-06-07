/*
 * @Author: your name
 * @Date: 2020-05-07 15:50:01
 * @LastEditTime: 2020-06-03 19:23:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\src\store\index.js
 */ 
import Vuex from 'vuex'
import {setToken} from '@/libs/util'
export default Vuex.createStore({
  state: {
    author:'Jarry007',
    github:'https://github.com/Jarry007',
    version:'1.0.1',
    token:{},
    temporary:[{title:'关于前端架构的那些事',id:1,author:'Jarry007'}]
  },
  getters:{
    token:(state)=>state.token
  },
  mutations: {
    setToken(state, token){
      if(token){
        console.log('setToken',token)
      state.token = token.token
      state.role = token.role
      }
      
      setToken(token)
    },
    reset(state){
      state.version = ~~ (Math.random() * 1000)
    },
    addList(state,obj){
      // console.log(obj.id)
      state.temporary.push(obj)
    },
    delList(state,index){
      // console.log('del',state.temporary,index)
      state.temporary.splice(index,1)
    }
  },
  actions: {
    login({commit},token){
      return new Promise((resolve)=>{
        commit('setToken',token)
        resolve(token)
      })
      
    },
    logout({commit}){
      commit('setToken','')
    }
  },
  modules: {
  }
});
