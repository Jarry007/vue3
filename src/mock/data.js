import Mock from 'mockjs'
const random = Mock.Random
export function login(data) {
    const { user, password } = JSON.parse(data.body)
    console.log(user, password)
    if (user === 'allin' && password === 'allin') {
        return {
            code: 200,
            data: {
                token: random.string(21),
                role: 'admin'
            }
        }
    } else if (user === 'user' && password === 'user') {
        return {
            code: 200,
            data: {
                token: random.string(21),
                role: 'user'
            }
        }
    }
    else {
        return {
            code: 500,
            msg: '用户名或密码错误'
        }
    }

}