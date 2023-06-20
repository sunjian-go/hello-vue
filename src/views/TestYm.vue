<template>
  <div>
    <Test :name="computer" :peo="people" @child="getData"></Test>、
    <!--使用@绑定子组件传递过来的变量名称，vue会将这个数据放到getData函数的第一个位置参数-->
  </div>
</template>
<script>
export default {
  data(){
    return{
      computer: ['主机','键盘','显示器'],
      people: [
        {'id':1,'name':'tom1','sex':'man','old':21},
        {'id':2,'name':'tom2','sex':'man','old':22},
        {'id':3,'name':'tom3','sex':'man','old':23},
      ]
    }
  },
  methods:{
    getData(data){
      console.log(data)
    }
  }
}
</script>
