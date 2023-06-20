import axios from "axios";
const instance = axios.create({
    baseURL: 'http://127.0.0.1:9989',
    timeout: 5000,
})

//拦截器: 请求拦截
instance.interceptors.request.use(config=>{
    //在请求被发送前做些什么
    //例如添加请求头
    config.headers["token"]='1234545'
   // alert("请求拦截器：请求成功！")
    return config;
},error=>{
   // alert("请求拦截器：请求失败！")
    return Promise.reject(error)
})

//拦截器: 响应拦截
instance.interceptors.response.use(response=>{//请求到页面时会走response这一步
    //处理响应数据
    console.log(response)
    if (response.data.code!=200){
        alert("拦截器：响应失败")
    }else {
        alert("拦截器： 响应成功")
    }
    return response;
},error => {    //请求不到页面时会走error这一步
    alert("请求服务器接口失败！")
    console.log(error);
    return Promise.reject(error)
})
export default instance