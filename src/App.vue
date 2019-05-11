<template lang="pug">
  #app
    .container
      router-view
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './styles/global.scss';
@import './styles/animation.scss';
@import './styles/transition.scss';
#app {
  background: #f8f8f8;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .container {
    width: 1000px;
    margin: 0 auto;
    background: rgb(171, 216, 218);
  }
}
</style>
