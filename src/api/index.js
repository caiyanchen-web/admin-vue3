//api接口的封装


import request  from "../utils/request.js";

export default {
    //登录接口
    login(params){
        return request({
            url:'/sysAdmin/login',
            method:'post',
            data:params
        })
    }
}