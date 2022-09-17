import Demo from "./Demo/index.js"
import Card from "./Card/index.js"
export { Demo, Card }

const components = {
  Demo,
  Card
}
const install = function (Vue) {
  if(install.installed) return ;
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}
const API = {
  install
}
export default API