import request from '@/libs/request'

export function loginIt (data){
    return request({
        url:'login',
        methods:'post',
        data:data
    })
}