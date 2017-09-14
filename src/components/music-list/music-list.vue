<template>
  <div class="music-list">
    sdfsdfs
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    bgImage: {
      type: String,
      default: ''
    },
    songs: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="stylus" scoped>
.music-list
  position fixed
  width 100%
  height 100%
  top 0
  bottom 0
  z-index 80
  background #000
</style>
