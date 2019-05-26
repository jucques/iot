<template>
  <div>
  <header class="header">
            <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
            <el-menu-item index="1"><a href="../#/shouye" style="text-decoration:none;color:white;target:self">首页</a></el-menu-item>

            <el-submenu index="2">
                <template slot="title">能耗在线监控系统</template>
                <el-menu-item index="2-1"><a href="../#/tradeStatistics" style="text-decoration:none;color:white;target:self">分析1</a></el-menu-item>
                <el-menu-item index="2-2"><a href="../#/power1" style="text-decoration:none;color:white;target:self">分析2</a></el-menu-item>
                <el-menu-item index="2-3"><a href="../#/tradeFlow" style="text-decoration:none;color:white;target:self">分析3</a></el-menu-item>
            </el-submenu>
        </el-menu>

   </header>

  <!--    -->

    <main>
        <div  class="main-left">
           <router-view> </router-view>
        </div>


   </main>
  </div>
</template>

<script>

export default {
      name: 'app',
      data: function (){
        return {
          active:true,
        }
      }
  }
</script>

<style>
body{
   padding:10px;
   margin:10px;
   background-image:unset;
}
#app{
  min-width: 1200px;
  margin: 0 auto;
  font-family: "Helvetica Neue","PingFang SC",Arial,sans-serif;
}
header{
    z-index: 1000;
    min-width: 1200px;
    padding:5px 0px 5px 0px;
    transition: all 0.5s ease;
    border-top: solid 4px gray;
    background-color: #;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);
}

main{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 100%;
    border:solid 8px silver;
 }
main .main-left{
    text-align: center;
    width:100%;
    float: left;
    margin:0px;
}
main .main-right{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    border:2px solid grey;
    margin: 10px 10px;
}
main .el-menu{
    background-color: transparent!important;
}
</style>
