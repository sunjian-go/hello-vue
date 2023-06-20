<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <MyTest></MyTest><!--使用子组件-->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MyTest from "@/components/Test.vue";//导入子组件

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    MyTest,//注册子组件
  },
};
</script>
