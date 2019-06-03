<template>
  <component :is="comType" v-if="comType"></component>
</template>
<script>
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    AboutContent: () =>
      import(/* webpackChunkName: "about" */ './AboutContent.vue')
  },
  data() {
    return {
      comType: ''
    }
  },
  methods: {},
  computed: {
    ...mapState({
      curSub: state => state.curSub
    })
  },
  watch: {
    curSub() {
      this.comType = ''
      setTimeout(() => {
        this.comType = 'AboutContent'
      }, 0)
    }
  },
  created() {
    this.comType = 'AboutContent'
    console.log('about created')
  },
  mounted() {}
}
</script>
<style></style>
