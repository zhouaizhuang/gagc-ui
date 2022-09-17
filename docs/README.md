# 快速开始

### 安装组件库
```bash
  npm i gagc-ui
```

#### 引用组件库
> 在main.js中引入组件库

```javascript
// 全部引入
import 'gagc-ui/dist/css/index.css'
import GAGCUI from 'gagc-ui'
Vue.use(GAGCUI)
// 按需引入
import 'gagc-ui/dist/css/demo.css'
import 'gagc-ui/dist/css/card.css'
import { Demo, Card } from "gagc-ui"
Vue.use(Demo)
Vue.use(Card)
```