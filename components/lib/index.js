import Demo from "./demo"
import Card from "./card"

const component = {
  Demo,
  Card
}

const install = function (Vue){
  if(install.installed) return ;
  Object.keys(component).forEach(key => {
    Vue.component(component[key].name, component[key])
  })
}
const API = {
  install
}
export default API