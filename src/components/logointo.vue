<template lang="html">
<div class="back">
<div class="bg">
<img src="../assets/6.jpg"/>
</div>
<div class="hezi">

    <div class="head">
      <span style="font-size:20px;margin-left:50px;line-height: 36px;">登录</span>
<hr style="width:100%;
margin:0 auto;
border: 0;
height: 0;
border-top: 1px solid rgba(0, 0, 0, 0.1);
border-bottom: 1px solid rgba(255, 255, 255, 0.3);"></hr>
      <div style="margin-top:10px">
        <el-input type="text" auto-complete="off" v-model="ruleForm.name" placeholder="请输入账号"
        style="margin-top:20px"></el-input>
        <el-input type="password" auto-complete="off" v-model="ruleForm.password" placeholder="请输入密码"
        style="margin-top:20px"></el-input>
        <!-- 点击进行登录提交 -->
        <el-button type="primary" v-on:click="handleSubmit" style="margin-top:20px">
            <a href="../#/shouye" style="text-decoration:none;color:white;target:self">登录</a></el-button>
    </div>

  </div>

  </div>

  <div class="lab2">
  <tr>北京市住房和城乡建设科学技术研究所（北京市房屋安全鉴定总站）</tr><br>
  <tr>中国矿业大学（北京）机电与信息工程学院</tr>
  </div>
  <div class="lab">
  <tr>超低能耗建筑在线监测系统</tr>
  </div>
  </div>

</template>

<script>
export default {
  // 进入路由时判断当前登录状态，已登录则跳转到首页

  data () {
    // 验证名字
    let validatorName = function (rule, value, callback) {
      if (!value) {
        callback(new Error('请输入账号'))
      } else {
        callback()
      }
    }
    // 验证密码
    let validatorPass = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { validator: validatorName, trigger: 'blur' }
        ],
        password: [
          { validator: validatorPass, trigger: 'blur' }
        ]
      }
    }
  },


  methods: {
  // 表单提交
  handleSubmit () {
    // 验证表单
    this.$refs.ruleForm.validate(valid => {
    console.log(valid)
    var _this = this;
      if (valid) {
      console.log(1)
    this.$http.post(' ',       //在这里post文件地址
      {name:this.ruleForm.name,password:this.ruleForm.password})
                           .then(function(result){//请求成功回调

                            if(result.data.code == 200){

                              _this.$router.push('/main')
                              }else{
                              console.log(2)
                                  return false;
                              }
                           })
                           .catch(function(data){//请求失败回调
                               console.log("data");
                              // _this.$Message.error('网络异常，请检查网络后重试!');
                           });
      } else {
      }
    })
   },

 }
}
</script>

<style>
.bg{
margin-top:-30px;
position:absolute;
z-index:-1;
}
.hezi{
   position:absolute;
   margin-top:200px;
   margin-left:1000px;
   padding:20px 20px 10px 20px;
   Border-radius:20px;
   background-Color:#ffffff;
   width:250px;
   height:250px;
}
.lab{
position:absolute;
margin-top:100px;
margin-left:200px;
font-size:50px;
color:#0099FF;
font-family:"华文楷体";
}
.lab2{
position:absolute;
margin-top:600px;
margin-left:400px;
font-size:20px;
color:#FFFFFF;
font-family:"华文楷体";
}

</style>
