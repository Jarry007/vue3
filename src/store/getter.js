/*
 * @Author: your name
 * @Date: 2020-06-22 19:11:51
 * @LastEditTime: 2020-06-22 19:11:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3\src\store\getter.js
 */ 
const getters = {
   token:state=>state.token.role,
   getter_routes:state=>state.routePermission.router,
   sidebar:state=>state.client.sidebar.open
}

export default getters
   
