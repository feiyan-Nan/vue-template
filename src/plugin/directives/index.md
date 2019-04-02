## API


### clickoutside 局部指令,使用时引用

```html
<div class="main" v-clickoutside="handleClose" >
  <button @click="show= !show"> 点击显示下拉菜单</button>
  <div class="dropdown" v-show="show" >
  <p>下拉框的内容， 点击外面区域可以关闭</p>
  </div>
</div>
methods: {
  handleClose () {
    this.show = false
  }
}
```
