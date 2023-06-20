<!--子组件-->
<template>
<div class="dd">
  <h1>{{msg}}</h1>
  <ul>
    <li v-for="(v,k) in name" :key="k">{{k}}:{{v}}</li>
  </ul>
  <table class="tab">
    <thead>
    <tr >
      <th>id</th>
      <th>name</th>
      <th>sex</th>
      <th>old</th>
    </tr>
    </thead>
    <tbody >
    <tr v-for="v in peo" :key="v"><!--在行便利，下面打印每一列-->
      <td >{{ v.id }}</td>
      <td >{{ v.name }}</td>
      <td >{{ v.sex }}</td>
      <td >{{ v.old }}</td>
    </tr>
    </tbody>
  </table>
  <input type="button" value="点击发送子组件数据到父组件" @click="btn">
</div>

</template>

<script>
export default {
  name: "Test",
  props:{
    name: Array,
    peo: Object
  },
  data(){
    return{
      msg:'hello vue',
      childMsg: "我是子组件的数据"
    }
  },
  methods:{
    btn(){
      this.$emit('child',this.childMsg)
    }
  }
};
</script>

<style scoped>
.dd{
  background: #42b983;
}
.tab{
  border: 1px gray solid;
}
</style>