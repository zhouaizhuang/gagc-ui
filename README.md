## gagc-ui组件库

### 快速开始

#### 1、安装组件库
```bash
  npm i gagc-ui
```
#### 2、引用组件库
```javascript
  // 方式一：全部引入
  import 'gagc-ui/dist/css/index.css'
  import GAGCUI from 'gagc-ui'
  Vue.use(GAGCUI)
  // 方式二：按需引入
  import 'gagc-ui/dist/css/demo.css'
  import 'gagc-ui/dist/css/card.css'
  import { Demo, Card } from "gagc-ui"
  Vue.use(Demo)
  Vue.use(Card)
```

