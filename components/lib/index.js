import Demo from "./demo/index.js"
import Card from "./card/index.js"

const components = {
  Demo,
  Card
}

const install = function (Vue) {
  if(install.installed) return ;
  Object.keys(components).forEach(key => {
    Vue.components(components[key].name, components[key])
  })
}

const API = {
  install
}

export default API