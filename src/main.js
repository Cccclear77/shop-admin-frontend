import Vue from 'vue'
import App from './App.vue'

//导入axios
import axios from "axios";

// 引入element-ui   1.引入
import ElementUI from 'element-ui';
// 2.引入样式
import 'element-ui/lib/theme-chalk/index.css';
//引入vue-router
import VueRouter from 'vue-router';

import store from "store"
//注册插件
Vue.use(VueRouter);

//导入组件
import Login from './pages/Login';
import Admin from './pages/Admin';
import GoodsList from "./pages/goods/GoodsList";
import GoodsAdd from "./pages/goods/GoodsAdd";
import GoodsEdit from "./pages/goods/GoodsEdit";
import CategoryList from "./pages/category/CategoryList";




// element-ui 3.注册插件
Vue.use(ElementUI);

Vue.config.productionTip = false;

//配置路由
const routes = [
  //路由重定向
  {
    path: '/',
    redirect: '/admin'
  },
  {
    path: '/login',
    component: Login,
    meta: '登录页'
  },
  {
    path: '/admin',
    component: Admin,
    meta: '管理后台',
    redirect: '/admin/goods-list',
    children: [{
        path: 'goods-list',
        component: GoodsList,
        meta: '商品列表'
    },
      {
        path: "goods-add",
        component: GoodsAdd,
        meta:"添加商品"
      },
      {
        path: "goods-edit",
        component: GoodsEdit,
        meta: "编辑商品"
      },
      {
        path: 'category-list',
        component: CategoryList,
        meta: '栏目列表'
      },
    ]
  }
]
//创建路由对象
const router = new VueRouter({
  routes
})
// axito.defaults.baseURL="http://localhost:8899"
//给vue构造函数的原型链添加$axios
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App),
  //挂载到跟实例
  
}).$mount('#app')