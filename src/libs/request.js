import axios from 'axios'
import {getToken} from './util'
import {message} from 'ant-design-vue'

const service = axios.create({
    baseURL: '/',
    timeout: 6000
})

service.interceptors.request.use(
    config => {
            if(getToken()){
            config.headers['Authorization'] = getToken()
            }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)


service.interceptors.response.use(
    res => {
        if (res.data.code === 200) {
            return res.data
        } else {
            // console.log(res)
            message.error(res.data.msg)
            return Promise.reject(res.data.msg)
        }
    },
    error => {
        message.error(error.message)
        return Promise.reject(error)
    }

)

export default service