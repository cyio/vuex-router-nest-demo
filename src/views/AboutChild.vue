<template>
  <h1>child {{ playUrl }}</h1>
</template>
<script>
export default {
  props: {
    playUrl: {
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {},
  computed: {},
  created() {
    console.log('child created: ', this.playUrl)
    this.$watch('playUrl', (value) => {
      console.log('playUrl change to: ', value)
    })
  },
  mounted() {
    console.log('child mounted: ', this.playUrl)
  },
  beforeDestroy() {
    console.log('child beforeDestroy')
  },
  destroyed() {
    console.log('child destroyed')
  }
}
</script>
<style></style>
