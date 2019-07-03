import Vue from 'vue'
import Toast from './Toast.vue'

let _addQueue = [] // 提示的任务队列
let _toasts = []
let _pre = null
let _running = false

function createToast (type, msg, duration) {
  let toastDiv = document.createElement('div')
  let id = 'toast-' + (Math.random() * 10000).toFixed(0)
  toastDiv.innerHTML = `<Toast id="${id}" type="${type}" msg="${msg}" :show.sync="show" :offset="offset" @close="close" @clear-tick="clearTick" @set-tick="setTick"></Toast>`
  document.body.appendChild(toastDiv)

  // toast的vue实例
  let toast = new Vue({
    el: toastDiv,
    components: {
      Toast
    },
    data: {
      show: false,
      id: id,
      offset: 32,
      tick: null
    },
    methods: {
      close () {
        this.show = false
        let rect = this.$el.querySelector(`#${this.id}`).getBoundingClientRect()
        let flag = false
        _toasts.forEach(toast => {
          if (toast.id === this.id) {
            flag = true
          }
          if (flag && toast.id !== this.id) {
            toast.offset -= rect.height + 10
          }
        })
        _toasts = _toasts.filter(toast => toast.id !== this.id)
      },
      clearTick () {
        if (this.tick !== null) {
          clearTimeout(this.tick)
        }
      },
      setTick () {
        this.tick = setTimeout(() => {
          this.close()
        }, duration || 1000)
      }
    }
  })
  return toast
}

function showToast () {
  if (_addQueue && _addQueue.length > 0) {
    let toast = _addQueue.shift() // 得到队列中的第一个
    if (_pre) {
      let rect = _pre.$el.querySelector(`#${_pre.id}`).getBoundingClientRect()
      toast.offset = Math.max(rect.top + rect.height + 10, 32)
    }
    toast.show = true
    toast.setTick()
    _toasts.push(toast)
    _pre = toast
    setTimeout(() => {
      showToast()
    }, 350)
  } else {
    _running = false
  }
}

function run () {
  if (!_running) {
    _running = true
    showToast()
  }
}

const toast = {
  info (msg, duration) {
    let _toast = createToast('info', encodeURIComponent(msg), duration)
    _addQueue.push(_toast)
    run()
    return _toast
  },
  success (msg, duration) {
    let _toast = createToast('success', encodeURIComponent(msg), duration)
    _addQueue.push(_toast)
    run()
    return _toast
  },
  warn (msg, duration) {
    let _toast = createToast('warn', encodeURIComponent(msg), duration)
    _addQueue.push(_toast)
    run()
    return _toast
  },
  error (msg, duration) {
    let _toast = createToast('danger', encodeURIComponent(msg), duration)
    _addQueue.push(_toast)
    run()
    return _toast
  }
}

Vue.prototype.$Toast = toast
