import axios from 'axios'
import toast from '../utils/toast'
import { openLoadding, closeLoadding } from '../utils/rxload'
import { errorCode } from './netenum'

let intervene = true

/**
 * 初始化Axios
 */
let rxhttp = axios.create({
  baseURL: '/apis',
  timeout: 10000,
})

/**
 * 请求拦截器
 */
rxhttp.interceptors.request.use(request => {
  request.headers['Authorization'] = localStorage.getItem('token')
  return request
})

/**
 * 网络协议解析拦截器
 */
rxhttp.interceptors.response.use(
  response => {
    if (intervene) closeLoadding()
    return response.data
  },
  error => {
    if (intervene) closeLoadding()
    if (error.message.includes('timeout')) {
      toast.error(errorCode[408])
      return Promise.reject(error)
    }
    toast.error(errorCode[error.status] || errorCode[-1])
    return Promise.reject(error)
  }
)

/**
 * 业务参数解析拦截器
 */
rxhttp.interceptors.response.use(builder => {
  if (builder) {
    if (builder.error_no == '0') {
      return builder
    } else if (builder.error_code == '404') {
      toast.error('tokne过期,请重新登录')
    } else {
      toast.error(builder.error_info)
    }
    return Promise.reject(builder)
  }
})

/**
 * API构造器
 */
class http {
  /**
   * GET请求
   */
  static async get (url, params, isShow, loadText) {
    intervene = isShow
    if (isShow) openLoadding(loadText)
    return await rxhttp.get(url, { params })
  }

  /**
   * POST请求
   */
  static async post (url, params, isShow = true, loadText) {
    intervene = isShow
    if (isShow) openLoadding(loadText)
    return await rxhttp.post(url, params)
  }
}

export default http
