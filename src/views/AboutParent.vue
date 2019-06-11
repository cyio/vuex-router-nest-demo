<template>
  <div>
    <h1>content {{ playUrl }}</h1>
    <AboutChild :playUrl="playUrl" />
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import AboutChild from './AboutChild.vue'

function sleep(ms = 0) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms))
}
export default {
  components: {
    AboutChild
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions('aboutModule', ['setPlayUrl', 'clearStore'])
  },
  computed: {
    ...mapState('aboutModule', ['playUrl'])
  },
  created() {
    console.log('parent created: ', this.playUrl)
  },
  async mounted() {
    console.log('parent mounted: ', this.playUrl)
    // await sleep(300)
    this.setPlayUrl()
  },
  beforeDestroy() { // beforeDestroy 执行可能在新页面组件 created 之后，会影响下个页面的清理操作需要在路由切换时处理
    console.log('parent before destory')
  },
  destroyed() {
    console.log('parent destroyed')
  }
}
</script>
<style></style>
