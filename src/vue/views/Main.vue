<template>
  <div class="main" v-clickoutside:success="handleClose" >
    1231
    <button @click="show= !show"> {{msg}}</button>
    <div class="dropdown" v-show="show" >
    <p>下拉框的内容， 点击外面区域可以关闭</p>
    </div>
  </div>
</template>

<script>
import waves from '@/plugin/directives/waves/index.js' // 水波纹指令
import clickoutside from '@/plugin/directives/clickoutside'
export default {
  name: 'HelloWorld',
  directives: {
    waves,
    clickoutside
  },
  data () {
    return {
      show: false,
      // msg: this.$store.state.matter.msg
    }
  },
  mounted () {
    let a = 123
    let b = 456
    if (a === b) {
      console.log(a)
    }
    this.$Toast.info('成功')
    this.$Toast.error('失败')
    // console.log(this.$store.state.matter.msg, 123)
    console.log(moment().format('dddd'))
  },
  computed: {
    msg () {
      return this.$store.state.matter.msg
    }
  },
  methods: {
    handleClose () {
      this.$store.commit('updateTasksList', 'zhangsan')
      this.show = false
    }
  }
}
</script>

<style lang="scss">
[v-cloak] {
  display: none;
}
  .main{
    width: 125px;
  }
  button {
    display: block;
    width: 100%;
    color: #ffffff;
    background: #39f;
    border: 0;
    padding: 6px;
    text-align: center;
    font-size: 12px;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    position: relative;
  }
  button:active {
    top: 1px;
    left: 1px;
  }
  .dropdown {
    background: cornsilk;
    width: 100%;
    height: 150px;
    margin: 5px 0;
  }
</style>
