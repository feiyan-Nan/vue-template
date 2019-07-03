import Vue from 'vue'
// 这里引入全局组件,如果有更多的组件
import IPagination from './components/pagination/Pagination'
import './components/toast'
// 引入了全局的指令
import './directives'

const plugin = {}
plugin.install = () => {
  const components = [IPagination]
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}
export default plugin
