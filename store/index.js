import Vue from "vue"
import Vuex from "vuex"


// 导入仓库模块
import user from "./modules/user"

// 注册组件
Vue.use(Vuex)

// 创建一个仓库
export default new Vue.store({
    modules: {
        user
    }
})