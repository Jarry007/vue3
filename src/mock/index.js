import Mock from 'mockjs'
import {login} from './data'

Mock.mock(/login/,login)

export default Mock