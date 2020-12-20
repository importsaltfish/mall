import axios from 'axios'

//最后方案
export function request(config) {

    const instance1 = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })


    //axios的拦截器
    instance1.interceptors.request.use(config => {
        console.log(config);
        
        return config
    },err => {
        console.log(err);
    })
   


    //返回的是一个promise
    //发送真正的网络请求
    return instance1(config)
}
 