// 引入组件
import shouye from './components/shouye.vue'
import tradeFlow from './components/tradeFlow.vue'
import logointo from './components/logointo.vue'
import main from './components/main.vue'
import tradeStatistics from './components/tradeStatistics.vue'
import tradeStatistics2 from './components/tradeStatistics2.vue'
import tradeStatistics3 from './components/tradeStatistics3.vue'
import tradeStatistics4 from './components/tradeStatistics4.vue'
import tradeStatistics5 from './components/tradeStatistics5.vue'
import power1 from './components/power1.vue'
import power2 from './components/power2.vue'
import power3 from './components/power3.vue'
import power4 from './components/power4.vue'

export default[
   {
    path:'/',
    component:logointo,
    redirect:'/logointo'
  },

  {path:'/logointo',component:logointo},
  {path:'/main',component:main,
   redirect:'/shouye',
    children:[
     {path:'/shouye',component:shouye},
     {path:'/tradeFlow',component:tradeFlow},
     {path:'/power1',component:power1},
     {path:'/power2',component:power2},
     {path:'/power3',component:power3},
     {path:'/power4',component:power4},
     {path:'/tradeStatistics',component:tradeStatistics},
     {path:'/tradeStatistics2',component:tradeStatistics2},
     {path:'/tradeStatistics3',component:tradeStatistics3},
     {path:'/tradeStatistics4',component:tradeStatistics4},
     {path:'/tradeStatistics5',component:tradeStatistics5}
   ]
 },


]
