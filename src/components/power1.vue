<template>
<el-container style="height: 600px; border: 1px solid #eee">
<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
  <el-menu :default-openeds="['1', '3']">
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-message"></i>一号楼</template>
      <el-menu-item-group>

        <el-menu-item index="1-1">
        <a href="../#/tradeStatistics2" style="text-decoration:none;color:blue;target:self">1单元</a></el-menu-item>
        <el-menu-item index="1-2">
        <a href="../#/tradeStatistics3" style="text-decoration:none;color:blue;target:self">2单元</a></el-menu-item>
        <el-menu-item index="1-3">
        <a href="../#/tradeStatistics4" style="text-decoration:none;color:blue;target:self">3单元</a></el-menu-item>
        <el-menu-item index="1-4">
        <a href="../#/tradeStatistics5" style="text-decoration:none;color:blue;target:self">4单元</a></el-menu-item>

      </el-menu-item-group>

    </el-submenu>

    <el-submenu index="2">
      <template slot="title"><i class="el-icon-menu"></i>二号楼</template>
      <el-menu-item-group>

      <el-menu-item index="1-1">
      <a href="../#/tradeStatistics2" style="text-decoration:none;color:blue;target:self">1单元</a></el-menu-item>
      <el-menu-item index="1-2">
      <a href="../#/tradeStatistics3" style="text-decoration:none;color:blue;target:self">2单元</a></el-menu-item>
      <el-menu-item index="1-3">
      <a href="../#/tradeStatistics4" style="text-decoration:none;color:blue;target:self">3单元</a></el-menu-item>
      <el-menu-item index="1-4">
      <a href="../#/tradeStatistics5" style="text-decoration:none;color:blue;target:self">4单元</a></el-menu-item>


      </el-menu-item-group>
      </el-submenu>

    <el-submenu index="3">
      <template slot="title"><i class="el-icon-setting"></i>三号楼</template>
      <el-menu-item-group>

      <el-menu-item index="1-1">
      <a href="../#/tradeStatistics2" style="text-decoration:none;color:blue;target:self">1单元</a></el-menu-item>
      <el-menu-item index="1-2">
      <a href="../#/tradeStatistics3" style="text-decoration:none;color:blue;target:self">2单元</a></el-menu-item>
      <el-menu-item index="1-3">
      <a href="../#/tradeStatistics4" style="text-decoration:none;color:blue;target:self">3单元</a></el-menu-item>
      <el-menu-item index="1-4">
      <a href="../#/tradeStatistics5" style="text-decoration:none;color:blue;target:self">4单元</a></el-menu-item>

      </el-menu-item-group>

    </el-submenu>
  </el-menu>
</el-aside>

<el-container>


  <el-main class="tac" style="backgroundColor:#99ffff;">

  <el-row class="tac">
    <el-col :span="12">
      <h5>表单选择</h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-menu-item index="1">
          <i class="el-icon-location"></i>
          <span slot="title"><a href="../#/power1" style="text-decoration:none;color:white;target:self">电表</a></span>
        </el-menu-item>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-location"></i>
          <span slot="title"><a href="../#/power2" style="text-decoration:none;color:white;target:self">水表</a></span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-location"></i>
          <span slot="title"><a href="../#/power3" style="text-decoration:none;color:white;target:self">热力表</a></span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-location"></i>
          <span slot="title"><a href="../#/power4" style="text-decoration:none;color:white;target:self">煤气表</a></span>
        </el-menu-item>
      </el-menu>
    </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-card style="margin-left:80px;">
          <img src="../assets/12.png" class="image">
          <div style="padding: 0px;">
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" @click="open">查看参数</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
<div class="kapian">
<el-card class="box-card" style="width:300px">
<tr style="float:left;">设备厂家：博高</tr><br>
<tr style="float:left;">设备名称：四楼电表1</tr><br>
<tr style="float:left;">设备编号：2154836</tr><br>
<tr style="float:left;">通断状态：拉闸</tr><br>
<tr style="float:left;">节点类型：C</tr><br>
<tr style="float:left;">采集器号：0001000002154836</tr><br>
<tr style="float:left;">资料状态：待同步</tr><br>
</el-card>
</div>
  </el-main>

</el-container>
<el-container>
<div id="main" style="width:800px;height:500px;padding-top:100px;backgroundColor:#ffffffff;"><h1>电表1</h1></div>
</el-container>
</el-container>

</template>



<script>
let echarts = require('echarts/lib/echarts')
  export default {
    data() {

      return {
        currentDate: new Date(),
        tableData: Array(20).fill(item)
      }
    },
    methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    open() {
  this.$alert('1单元101室','电表1', {
    confirmButtonText: '确定',
  });
},
      init(){
    // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('main'));

  // 指定图表的配置项和数据
  var option = {
  title: {
      text: '能耗折线图'
  },
  tooltip : {
      trigger: 'axis',
      axisPointer: {
          type: 'cross',
          label: {
              backgroundColor: '#6a7985'
          }
      }
  },
  legend: {
      data:['电量','水量','热力','煤气']
  },

  grid: {
      left: '1%',
      right: '5%',
      bottom: '0.1%',
      containLabel: true
  },
  xAxis : [
      {
          type : 'category',
          boundaryGap : false,
          data : ['周一','周二','周三','周四','周五','周六','周日']
      }
  ],
  yAxis : [
      {
          type : 'value'
      }
  ],
  series : [
      {
          name:'电量',
          type:'line',
          stack: '总量',
          areaStyle: {},
          data:[120, 132, 101, 134, 90, 230, 210]
      },
      {
          name:'水量',
          type:'line',
          stack: '总量',
          areaStyle: {},
          data:[220, 182, 191, 234, 290, 330, 310]
      },
      {
          name:'热力',
          type:'line',
          stack: '总量',
          areaStyle: {},
          data:[150, 232, 201, 154, 190, 330, 410]
      },
      {
          name:'煤气',
          type:'line',
          stack: '总量',
          areaStyle: {normal: {}},
          data:[320, 332, 301, 334, 390, 330, 320]
      }
  ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}
     },
      mounted(){this.init();}
  };
</script>




<style>
.kapian{
width:150px;
position:absolute;
margin-top:320px;
margin-left:0px;
font-size:20px;
color:#0099FF;
font-family:"华文楷体";
}
.text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width:200px;
  }

.time {
   font-size: 13px;
   color: #999;
 }

 .bottom {
   margin-top: 13px;
   line-height: 12px;
 }

 .button {
   padding: 0;
   float: right;
 }

 .image {
   width: 100%;
   display: block;
 }

 .clearfix:before,
 .clearfix:after {
     display: table;
     content: "";
 }

 .clearfix:after {
     clear: both
 }

.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

</style>
