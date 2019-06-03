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
  },
  mounted() {
    console.log('child mounted: ', this.playUrl)
  }
}
</script>
<style></style>
