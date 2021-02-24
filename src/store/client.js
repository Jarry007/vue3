import Cookies from 'js-cookie'

const client = {
    state:{
        sidebar:{
            open:false
        }
    },
    mutations: {
        HANDLE_SIDEBAR: state => {    //操作侧边栏缩放
            state.sidebar.open = !state.sidebar.open
            Cookies.set('sidebarStatus', state.sidebar.open)
        }
    },
    actions: {
        handleSideBar({ commit }) {
            commit('HANDLE_SIDEBAR')
        }
    }
}

// const mutations = {
//     HANDLE_SIDEBAR: state => {
//         console.log('操作侧边栏', state)
//         state.sidebar.open = !state.sidebar.open
//         Cookies.set('sidebarStatus', state.sidebar.open)
//     }
// }

// const actions = {
//     handleSideBar({ commit }) {
//         console.log('actions中')
//         commit('HANDLE_SIDEBAR')
//     }
// }

export default client