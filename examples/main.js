import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
/**
 * 如何更新UI组件库版本
 * @第1步 修改组件需要调整的地方并上传代码
 * @第2步 npm run build对组件库进行打包
 * @第3步 调整package.json中的第三行version字段的版本号 + 1
 * @第4步 npm login登录npm帐号
 * @第5步 npm publish
 */
/**
 * 如何测试UI组件库
 * @本地测试 采用下面提到的：全局引入或者按需引入方式即可
 * @npm发布后测试 
 * @第1步 先修改本地的package.json中name为demo（因为包名称不能和所需要下载的包名相同，否则报错）
 * @第2步 cnpm i gagc-ui@最新版本号   ----比如---->  cnpm i gagc-ui@0.1.13
 * @第3步 使用全局引入和按需引入分别测试
 */
/*
 ******************************************************************************************
 *****************************************开发调试：本地调试方式**************************************
 ******************************************************************************************
*/
// 1、全局引入
// import "../components/css/index.scss"
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
 *****************************************线上运行：通过引入线上代码看效果****************************
 *****************************************************************************************
*/
// 1、全局引入
// import 'gagc-ui/dist/css/index.css'
// import GAGCUI from 'gagc-ui'
// Vue.use(GAGCUI)
// 2、按需引入
import 'gagc-ui/dist/css/demo.css'
import 'gagc-ui/dist/css/card.css'
import { Demo, Card } from "gagc-ui"
Vue.use(Demo)
Vue.use(Card)

new Vue({
  render: h => h(App),
}).$mount('#app')
