<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/">back</router-link> |
      <button @click="jump(1)">jump1</button> |
      <button @click="jump(2)">jump2</button>
    </div>
    <router-view :key="$route.fullPath" />
  </div>
</template>
<script>
export default {
  methods: {
    jump(id) {
      console.warn('jump clicked')
      this.$store.commit('SET_CURSUB', id)
      this.$store.commit('aboutModule/CLEAR_STORE')
      location.href = `#/about?id=${id}`
    }
  }
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
