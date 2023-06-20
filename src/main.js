import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Test from "@/components/Test";//导入组件
//import axios  from "axios"; //导入axios
import http from "./api/http"//导入自定义axios,在http.js里面封装好了全局配置URL和超时时间，后面可以创建多个用来连接不同的API

var app=createApp(App)
//axios.defaults.baseURL='http://127.0.0.1:9989'; //全局配置URL
//axios.defaults.timeout=5000;//超时时间
//app.config.globalProperties.$axios=axios //注册axios
app.config.globalProperties.$http=http //注册自定义axios
app.use(router).mount("#app");
app.component("Test",Test)//全局注册组件