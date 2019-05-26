import Vue from 'vue';
import VueResource from 'vue-resource';
import Router from 'vue-router';
import logointo from '@/components/logointo';
//import about from "@/components/about.vue";



Vue.use(Router)
Vue.use(VueResource)


export default new Router({
  routes: [
    {path:'/',redirect:"/logointo"},
  {
  path: '/logointo',
  name: 'logointo',
  component: logointo
},
]
})
