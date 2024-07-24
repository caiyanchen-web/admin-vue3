/**
 * axios封装
 * **/

import axios from "axios"
//创建axios
const service = axios.create({
  baseURL: import.meta.env.VUE_APP_BASE_API,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
})
//核心函数
const request=(options)=>{
    options.method = options.method || 'get'
    if(options.method.toLowerCase() === 'get'){
        options.params=options.data
    }
    service.defaults.baseURL=import.meta.env.VUE_APP_BASE_API
    return service(options)
}
export default request