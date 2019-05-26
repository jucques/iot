
  <style scoped>
*{margin:0; padding:0; -webkit-box-sizing:border-box; -moz-box-sizing:border-box; -ms-box-sizing:border-box; -o-box-sizing:border-box; box-sizing:border-box;}
html, body{height:100%; font-size:14px; font-family:"Microsoft Yahei", "微软雅黑"}
img{border:none; vertical-align:top;}
input, select, textarea{outline:0; resize:none;}
ol, ul, li{list-style:none;}
p{word-wrap:break-word;}

.wrap{position:relative; width:1180px; height:600px; margin:0 auto;}
.pointer{cursor:pointer;}
.fl{float:left; display:inline;}
.fr{float:right; display:inline;}
.clearfix{zoom:1;}
.clearfix:after{clear:both; display:block; content:'';}
.phcolor{color:#aaa;}
.bg-f6f6f6{background:#F6F6F6;}
.ellipsis{overflow: hidden; white-space: nowrap; text-overflow: ellipsis;}
.b-index *, .b-bass *, .bm-case *, .b-contact *, .b-milestone *, .b-job *, .b-company *, .b-newslist *, .header *, .footer *{font-weight: 200;}
area{cursor:pointer;}
a{transition:all 0.5s}


.advantage{position:relative; z-index:-1; min-height:400px; padding-bottom:1px; background-color:#f0f8f7;}

.advantage .tit2{margin-bottom:50px; padding-top:50px; text-align:center; color:darkslategray;font-size:42px; font-weight:400; font-family:"楷体";}
.advantage .btn{width:160px; height:36px; margin:50px auto 50px; color:#589181; font-size: 16px; line-height:34px; border: 1px solid #589181; border-radius:0px;}
.advantage .btn:hover{color: #fff; background: #589181; transition:all 0.3s;}
.advantage .avt-group{height:387px; padding-left: 11px;}
.advantage .avt-group .avt-item{width:386px; height:194px; padding:40px 35px; text-align:left; border:1px solid transparent;}
.advantage .avt-group .avt-item .cnt{margin-left:138px;}
.advantage .avt-group .avt-item h3{position:relative; margin:15px auto 10px; font-size:20px; color:#000; font-weight:400;}
.advantage .avt-group .avt-item p{font-size:16px; color:#333; line-height:25px;font-family:"楷体";}
.advantage .avt-group .avt-item .i-adv1{width: 80px; height: 80px; margin-top: 15px;}
.advantage .avt-group .avt-item .i-adv2{width: 80px; height: 80px; margin-top: 15px;}
.advantage .avt-group .avt-item .i-adv3{width: 80px; height: 80px; margin-top: 15px;}
.advantage .avt-group .avt-item .i-adv4{width: 80px; height: 80px; margin-top: 15px;}
.advantage .avt-group .avt-item .i-adv5{width: 80px; height: 80px; margin-top: 15px;}
.advantage .avt-group .avt-item .i-adv6{width: 80px; height: 80px; margin-top: 15px;}
.advantage .avt-group .avt-item.active{background:#fff; border:1px solid #d8dbdb; box-shadow:0px 0px 12px #b6dcd9;}
.advantage .avt-group .avt-item.active .i-adv1{background-position: -553px -223px;}
.advantage .avt-group .avt-item.active .i-adv2{background-position: -652px -223px;}
.advantage .avt-group .avt-item.active .i-adv3{background-position: -744px -226px;}
.advantage .avt-group .avt-item.active .i-adv4{background-position: -845px -223px;}
.advantage .avt-group .avt-item.active .i-adv5{background-position: -941px -226px;}
.advantage .avt-group .avt-item.active .i-adv6{background-position: -1052px -223px;}

  </style>
<template>

    <div class="advantage">

        <div class="wrap">
            <h1 class="tit2">超低能耗建筑在线监测系统</h1>
            <ul class="clearfix avt-group">
                <li class="fl avt-item">
                    <img class="fl i-adv1" src="../assets/1.png" alt="快速应用构建" />
                    <div class="cnt">
                        <h3 class="tit">频次分析</h3>
                        <p class="text">频次分析</p>
                    </div>
                </li>
                <li class="fl avt-item">
                    <img class="fl i-adv2" src="../assets/2.png" alt="海量用户支撑" />
                    <div class="cnt">
                        <h3>总额分析</h3>
                        <p>总额分析</p>
                    </div>
                </li>
                <li class="fl avt-item">
                    <img class="fl i-adv3" src="../assets/3.png" alt="可视化操作管理" />
                    <div class="cnt">
                        <h3>流向分析</h3>
                        <p>流向分析</p>
                    </div>
                </li>
                <li class="fl avt-item">
                    <img class="fl i-adv4" src="../assets/4.png" alt="隐私权限策略" />
                    <div class="cnt">
                        <h3>一级关联分析</h3>
                        <p>一级关联分析</p>
                    </div>
                </li>
                <li class="fl avt-item">
                    <img class="fl i-adv5" src="../assets/5.png" alt="内置智能合约" />
                    <div class="cnt">
                        <h3>时间轴分析</h3>
                        <p>时间轴分析</p>
                    </div>
                </li>
                <li class="fl avt-item">
                    <img class="fl i-adv6" src="../assets/6.png" alt="区块链即服务" />
                    <div class="cnt">
                        <h3>横向时间分析</h3>
                        <p>横向时间分析</p>
                    </div>
                </li>
            </ul>

        </div>

    </div>
</template>
