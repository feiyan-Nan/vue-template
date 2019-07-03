# vue-template

> A Vue.js project (利用vue的生态圈架设了一套较为完整的架构)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

项目中已经全局引入的库:
```js
loadash
moment
```

vuex

vue实例上挂载有db(操作本地存储)

常量STORAGE所有的全局常量

项目采用scss编写样式文件已经将`global.scss` `atoms.scss` `mixin.scss` 通过webpack全局引入

1. `global.scss` 全局的默认重置样式
2. `atoms.scss` 全局的变量
3. `mixin.scss` 一些封装好的scss函数

全局封装了toast组件
路径:`/src/plugin/components/toast`

调用方法:
```js

```

项目文档结构使用pug进行编写, 结构更加清晰,

另外如果某个组件会大量使用，则不建议使用scoped（每个组件都会加上一个data-xxxx的属性），建议根据BEM规范来写SCSS。




### 全局的Toast提示
使用方式: 提供了
1. `this.$Toast.success('信息')`
1. `this.$Toast.error('信息')`
1. `this.$Toast.warn('信息')`
1. `this.$Toast.info('信息')`
