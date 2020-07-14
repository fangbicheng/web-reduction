# 扣费系统前端

## 背景
一个扣费管理系统，实现扣费服务的开通、关闭及查询等相关页面

## 线上地址
https://fangbicheng.github.io/web-reduction

## 界面预览
<img src="https://github.com/fangbicheng/web-reduction/blob/master/screenshots/reduction-list.png"  height="375" width="667">
<img src="https://github.com/fangbicheng/web-reduction/blob/master/screenshots/reduction-detail.png"  height="375" width="667">

## 代码目录
```bash
+-- build/                                  ---打包配置
+-- config/                                 ---环境设置
+-- node_modules/                           ---npm下载文件
+-- src/                                    ---核心代码
|   +-- api                                 ---http请求
|   |    --- index.js                       
|   |    --- interceptor.js                 ---axios拦截器
|   |    --- reduction.js                   ---扣费api
|   +-- assets                              ---图片资源文件
|   +-- components                          ---公共组件
|   |    --- Dialog.vue                     ---对话框
|   |    --- Loading.vue                    ---进度加载
|   |    --- Toast.vue                      ---toast提示
|   +-- pages                               ---系统页面
|   |    --- ReductionDetail.vue            ---扣费详情页
|   |    --- ReductionList.vue              ---扣费列表页
|   +-- plugins                             ---插件，主要是方便loading和toast的全局引用
|   |    --- Loading.js   
|   |    --- Toast.js
|   +-- router                              ---路由
|   |    --- index.js                       
|   --- App.js                              ---组件入口文件
|   --- main.js                             ---项目主文件
--- .test                                   ---单元测试文件目录
--- .babelrc                                ---babel配置文件
--- .eslintrc                               ---eslint配置文件
--- .travis.yml                             ---travis打包与部署脚本
--- index.html                              ---首页
--- package.json
```

## 技术栈
```bash
语言：HTML、CSS、ES6
预处理器：Less
框架：Vue
路由：Vue-Router
网络库：Axios
UI组件库：WeUi
功能组件库：Moment、Lodash
埋点：无
监控：无
CI：Travis
```

## 总体架构
![](https://github.com/fangbicheng/web-reduction/blob/master/screenshots/architecture.png)

## 开发与运行

``` bash
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```