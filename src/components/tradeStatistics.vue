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


  <el-main>
  <el-table
    :data="tableData"
    style="width:100%"
    height="700">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="100">
    </el-table-column>
    <el-table-column
      prop="time"
      label="时间"
      width="100">
    </el-table-column>
    <el-table-column
      prop="id"
      label="ID"
      width="100">
    </el-table-column>
    <el-table-column
      prop="power"
      label="电量/kw"
      width="100">
    </el-table-column>
      <el-table-column
        prop="water"
        label="水量/L"
        width="100">
    </el-table-column>
    <el-table-column
      prop="tem"
      label="温度/*C"
      width="100">
    </el-table-column>
    <el-table-column
      prop="hum"
      label="湿度/%"
      width="100">
    </el-table-column>
  </el-table>
  </el-main>

</el-container>
<el-container>
<div class="pic">
<img src="../assets/11.jpg"/>
</div>
</el-container>
</el-container>

</template>



<script>
  export default {
    data() {
      const item = {
        date: '2019-04-11',
        time:'17:15',
        id: '101室',
        power: '0.0',
        water:'30',
        tem: '26',
        hum: '30',
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>




<style>

.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
.pic{
width:450px;
height:560px;
float:right;
border:10px solid #eee;
margin: 10px 10px;
}
</style>
