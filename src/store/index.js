import Vuex from 'vuex'

export default Vuex.createStore({
  state: {
    author:'Jarry007',
    github:'https://github.com/Jarry007',
    version:'1.0.1',
    temporary:[{title:'关于前端架构的那些事',id:1,author:'Jarry007'}]
  },
  mutations: {
    reset(state){
      state.version = ~~ (Math.random() * 1000)
    },
    addList(state,obj){
      console.log(obj.id)
      state.temporary.push(obj)
    },
    delList(state,index){
      // console.log('del',state.temporary,index)
      state.temporary.splice(index,1)
    }
  },
  actions: {
  },
  modules: {
  }
});
