/**
 * 点击外面关闭功能, 作为**局部**指令使用
 * clickoutside
 * el: 绑定的元素
 * binging: 上面有很多属性
 */
export default {
  bind: function (el, binding) {
    console.log(el)
    console.log(binding)
    console.log(binding.arg)
    console.log(binding.value) // 是绑定的函数
    let documentHandler = function (e) {
      // e.target 是一个dom节点
      if (el.contains(e.target)) {
        return false
      }

      if (binding.expression) {
        // 调用关闭函数
        binding.value(e)
      }
    }
    el.__clickOutsideHandler = documentHandler
    document.addEventListener('click', el.__clickOutsideHandler)
  },
  unbind: function (el, binding) {
    document.removeEventListener('click', el.__clickOutsideHandler)
    delete el.__clickOutsideHandler
  }
}
