/**
 * 如何更新UI组件库版本
 * @第1步 修改组件需要调整的地方并上传代码
 * @第2步 npm run build对组件库进行打包
 * @第3步 调整package.json中的第三行version字段的版本号 + 1
 * @第4步 npm login登录npm帐号
 * @第5步 npm publish
 * @第6步 安装新版本测试 cnpm i gagc@最新版本号
 */
import Vue from 'vue'
import App from './App.vue'
/*
 ******************************************************************************************
 *****************************************本地调试方式**************************************
 ******************************************************************************************
*/
// 1、全局引入
// import "../components/css/index.css"
// import GAGCUI from '../components/lib/index.js'
// Vue.use(GAGCUI)
// 2、按需引入
// import "../components/css/demo.scss"
// import "../components/css/card.scss"
// import { Demo, Card } from "../components/lib/index.js"
// Vue.use(Demo)
// Vue.use(Card)
/************************************************************************************** */
/*
 *****************************************************************************************
 *****************************************其他项目，通过引入线上代码看效果****************************
 *****************************************************************************************
*/
// 1、全局引入
// import 'gagc-ui/dist/css/index.css'
// import GAGCUI from 'gagc-ui'
// Vue.use(GAGCUI)
// 2、按需引入
// import 'gagc-ui/dist/css/demo.css'
// import 'gagc-ui/dist/css/card.css'
// import { Demo, Card } from "gagc-ui"
// Vue.use(Demo)
// Vue.use(Card)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
