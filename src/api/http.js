import axios from "axios";
const instance = axios.create({
    baseURL: 'http://127.0.0.1:9989',
    timeout: 5000,
})

//拦截器: 请求拦截
// instance.interceptors.request.use(config=>{
//     //在请求被发送前做些什么
//     //例如添加请求头
//     config.headers["token"]='1234545'
//    // alert("请求拦截器：请求成功！")
//     return config;
// },error=>{
//    // alert("请求拦截器：请求失败！")
//     return Promise.reject(error)
// })

//拦截器: 响应拦截
instance.interceptors.response.use(response=>{
    //处理响应数据
    console.log(response)
    if (response.data.code!=200){
        alert("拦截器：响应失败")
    }else {
        alert("拦截器： 响应成功")
    }
    return response;
})
export default instance