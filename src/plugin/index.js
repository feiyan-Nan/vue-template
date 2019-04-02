import Vue from 'vue'
import IPagination from './components/pagination/Pagination'
import './directives'

const plugin = {}
plugin.install = () => {
  const components = [IPagination]
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}
export default plugin
