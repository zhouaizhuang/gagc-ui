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
