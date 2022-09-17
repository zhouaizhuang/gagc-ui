# package.json中 指令介绍
```bash
  "serve": "vue-cli-service serve"  将本地测试组件的项目跑起来       
  "buildCli": "vue-cli-service build" 将本地测试项目进行打包（用不到）
  "build": "npm run build:js && npm run build:css" 将组件项目进行整体打包
  "build:js": "webpack --config ./webpack.component.js" 将组件项目的js单独打包（用不到）
  "build:css": "npx gulp sass" 将组件的css进行打包（用不到）
  "docs:dev": "vuepress dev docs" 将vuepress文档运行，并调试
  "docs:build": "vuepress build docs" 将vuePress文档进行打包（用不到）
  "deploy": "bash deploy.sh" 将vuepress文档部署到线上
```

# 如何开发
## 编写UI组件库，本地调试
  1. 在components文件夹中编写UI组件代码
  2. 在examples文件夹中 npm run serve启动项目，引入组件中代码进行开发调试
  3. 调试完成后，确认无误，则将package.json中的第三行version字段的版本号 + 1个版本
  4. 代码提交。npm run build对组件进行打包
  5. npm login登录npm帐号
  6. npm publish
## 更新组件库文档
  1. 在docs文件夹中
  2. config.js可以控制文档主题，侧边栏
  3. componentDocs文件夹中编写单个组件的文档
  4. components文件夹中放组件和样式，否则在md文档中无法使用相对应的组件
  5. 修改完成之后，在git bash中执行npm run deploy，可能需要输入密码（也就是新版token）。部署到https://zhouaizhuang.github.io/gagc-ui/  可以查看（可能存在最长20min的缓存）
## 线上测试UI组件库
  1. 在examples文件夹中，先修改本地的package.json中name为demo（因为包名称不能和所需要下载的包名相同，否则报错）
  2. cnpm i gagc-ui@最新版本号 ----比如---->  cnpm i gagc-ui@0.1.13
  3. 使用全局引入和按需引入分别测试
  4. npm run serve将测试项目跑起来看看



