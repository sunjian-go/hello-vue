<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Test></Test>
  </div>
  <div class="dd">
  <h2>用户信息</h2>
  <button type="button" @click="getdata">点击获取后端数据</button>
  <table border="1" style="border: 1px solid gray;margin-left: auto;margin-right: auto">
    <thead><!--表格头-->
    <tr ><!--行-->
      <td>username</td><!--列-->
      <td>email</td>
      <td>sex</td>
      <td>city</td>
    </tr>
    </thead>
    <tbody  ><!--表格体-->
    <tr v-for="v in prople" :key="v.username">
      <td>{{v.username}}</td>
      <td>{{v.email}}</td>
      <td>{{v.sex}}</td>
      <td>{{v.city}}</td>
    </tr>
    </tbody>
  </table>
    <p style="color: red" v-show="seen">连接服务器报错</p>
  </div>
  <div>
    用户名：<input type="text"  name="a" v-model="user.username"><br>
    邮箱： <input type="text"  name="b" v-model="user.email"><br>
    性别： <input type="text"  name="c" v-model="user.sex"><br>
    城市： <input type="text"  name="d" v-model="user.city"><br>
    <button @click="login" >提交</button>
  </div>
</template>
<script>
  import axios from "axios";

  export default {
    name: 'aboutview',
    data(){
      return{
        prople: '',
        seen: false,
        user: {
          username:'',
          email:'',
          sex:'',
          city:'',
          aaa:''
        }
      }
    },
    methods:{
      login(){
        if (this.user.username==''||this.user.email==''||this.user.sex==''||this.user.city==''){
          alert("不能为空")
        }else {
        this.$http.post("/test1",this.user).then(res=>{
          //alert("提交成功")
          console.log("状态为："+res)
        }).catch(err=>{
          //alert("提交失败，稍后重试")
           console.log("post报错为："+err)
        })
        }
      },
      getdata(){
        //GET请求获取后端数据
        this.$http.get("/test1").then(response=> {
          console.log(response.data.data)
          this.prople = response.data.data
        }).catch(error=>{
          console.log("get报错为："+error)
          this.seen=true
        })
      }
    },
    created() {//钩子函数
       //this.getdata()//直接调用该函数即可
    },

  }
</script>
<style>
.dd{
  background: #42b983;
}
</style>