<template>
  <component :is="comType" v-if="comType"></component>
</template>
<script>
import { mapActions, mapState } from 'vuex'

// watch 元素不一定变化，存在即需要执行
function ensureWatchVueData(key, callback) {
  if (this[key]) {
    callback()
  } else {
    this.$watch(key, (value) => {
      if (value) {
        callback()
      }
    })
  }
}

export default {
  components: {
    AboutParent: () =>
      import(/* webpackChunkName: "about" */ './AboutParent.vue')
  },
  data() {
    return {
      comType: ''
    }
  },
  methods: {
    toExec() {
      this.comType = ''
      this.comType = 'AboutParent'
      if (this.comType === 'AboutParent') {
        this.$store.commit('aboutModule/CLEAR_STORE')
      }
    }
  },
  computed: {
    ...mapState({
      curSub: state => state.curSub
    })
  },
  created() {
    console.log('about created')
    ensureWatchVueData.bind(this)('curSub', this.toExec)
    // if (this.curSub) {
      // this.toExec()
    // } else {
      // this.$watch('curSub', (value) => {
        // this.toExec()
      // })
    // }
  },
  mounted() {
    console.log('about mounted')
  },
  beforeDestroy() {
    console.log('about beforeDestroy')
  },
  destroyed() {
    console.log('about destroyed')
  }
}
</script>
<style></style>
