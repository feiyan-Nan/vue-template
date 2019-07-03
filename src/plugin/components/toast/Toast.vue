<template lang="pug">
  transition(name="toast-fade")
    .ic-toast(v-show="show" :id="id" :class="typeClass" @mouseenter.self="clearTick" @mouseleave.self="setTick" :style="{'top':top}")
      .ic-toast__content(v-html="content")
      i.ibass-close.ibass--default(@click="close")
</template>

<script>
export default {
  name: 'ic-toast',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    msg: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info',
      validator: val => ['info', 'success', 'warning', 'error'].includes(val)
    },
    id: {
      type: String,
      default: ''
    },
    offset: {
      type: Number,
      default: 32
    }
  },
  data () {
    return {
      tick: null
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    clearTick () {
      this.$emit('clear-tick')
    },
    setTick () {
      this.$emit('set-tick')
    }
  },
  computed: {
    typeClass () {
      return `ic-toast--${this.type}`
    },
    content () {
      return decodeURIComponent(this.msg)
    },
    top () {
      return `${this.offset}px`
    }
  }
}
</script>

<style scoped lang="scss">
  .toast-fade-enter-active {
    animation: toast-fade-in .3s;
  }
  .toast-fade-leave-active {
    animation: toast-fade-out .3s;
  }

  @keyframes toast-fade-in {
    0% {
      transform: translate3d(-50%, -20px, 0);
      opacity: 0;
    }
    100% {
      transform: translate3d(-50%, 0, 0);
      opacity: 1;
    }
  }

  @keyframes toast-fade-out {
    0% {
      transform: translate3d(-50%, 0, 0);
      opacity: 1;
    }
    100% {
      transform: translate3d(-50%, -20px, 0);
      opacity: 0;
    }
  }
  .ic-toast {
    display: flex;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    top: 2rem;
    padding: 1rem;
    min-width: 13rem;
    max-width: 30rem;
    text-align: center;
    border-radius: 2rem;
    box-shadow: 1px 1px 6px rgba(0,0,0,0.3);
    word-break: break-all;
    line-height: 1.5rem;
    @at-root #{&}--info {
      background: #fff;
    }
    @at-root #{&}--success {
      background: $theme-color;
      color: #fff;
      .ibass-close {
        color: #fff;
      }
    }
    @at-root #{&}--warn {
      background: $theme-color-lighter;
      color: #fff;
      .ibass-close {
        color: #fff;
      }
    }
    @at-root #{&}--danger {
      background: $dangerous-color;
      color: #fff;
      .ibass-close {
        color: #fff;
      }
    }
    @at-root #{&}__content {
      flex-grow: 1;
      margin: 0 .5rem;
      text-align: left;
    }
    .ibass-close {
      position: relative;
      top: 1px;
    }
  }
</style>
