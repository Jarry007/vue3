/*
 * @Author: your name
 * @Date: 2020-06-03 18:27:55
 * @LastEditTime: 2020-06-08 11:20:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\src\libs\util.js
 */ 
import Cookies from 'js-cookie'
import config from '@/config'
const {cookieExpires} = config

const tokenLable = 'tokenJ'
const roleLable = 'roleJ'
export const setTokens = (token)=>{
   Cookies.set(tokenLable,token.token ||'',{expires:cookieExpires || 1})
   Cookies.set(roleLable,token.role ||'',{expires:cookieExpires || 1})
}

export const getToken = ()=>{
   const token = Cookies.get(tokenLable)
   // console.log('getToken',token)
   if(token) return token
   return false
}

export const getRole = ()=>{
   const role = Cookies.get(roleLable)
   // console.log('getToken',token)
   if(role) return role
   return false
}

