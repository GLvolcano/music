<template>
  <div class="music-list">
    <div class="back" @click="back">
      <span class="icon-back"></span>
    </div>
    <h2 class="title" v-html="title"></h2>
    <div class="bgImage-warpper" :style="bgimg" ref="bgImg">
    </div>
    <div class="bg-layer" ref="layer"></div>
    <scroll class="list" @scroll="scroll" :data="songs" v-if="songs" ref="list" :listen-scroll="listenScroll" :probe-type="probeType">
      <div class="song-list-wrapper">
        <song-list @select="selectItem" :songs="songs"></song-list>
      </div>
      <div v-show="!songs.length" class="loading-container">
        <loading></loading>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'base/scroll/scroll'
import Loading from 'base/loading/loading'
import SongList from 'base/song-list/song-list'
import { playlistMixin } from 'common/js/mixin'
import { mapActions } from 'vuex'

const RESERVED_HEIGHT = 40
export default {
  mixins: [playlistMixin],
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
  },
  data() {
    return {
      scrollY: 0
    }
  },
  created() {
    this.probeType = 3
    this.listenScroll = true
  },
  mounted() {
    this.imageHeight = this.$refs.bgImg.clientHeight
    this.minTransalteY = -this.imageHeight + RESERVED_HEIGHT
    this.$refs.list.$el.style.top = `${this.imageHeight}px`
  },
  computed: {
    bgimg() {
      return `background-image:url(${this.bgImage})`
    }
  },
  methods: {
    back() {
      this.$router.back()
    },
    scroll(pos) {
      this.scrollY = pos.y
    },
    selectItem(song, index) {
      this.selectPlay({
        item: this.songs,
        index
      })
    },
    handlePlaylist(playlist) {
      const bottom = playlist.length > 0 ? '60px' : ''
      this.$refs.list.$el.style.bottom = bottom
      this.$refs.list.refresh()
    },
    ...mapActions([
      'selectPlay'
    ])
  },
  watch: {
    scrollY(newY) {
      let zIndex = 0
      let scale = 1
      let translateY = Math.max(this.minTransalteY, newY)
      const percent = Math.abs(newY / this.imageHeight)
      if (newY > 0) {
        scale = 1 + percent
        zIndex = 10
      }
      this.$refs.layer.style['transform'] = `translate3d(0,${translateY}px,0)`
      if (newY < this.minTransalteY) {
        zIndex = 10
        this.$refs.bgImg.style.paddingTop = 0
        this.$refs.bgImg.style.height = `${RESERVED_HEIGHT}px`
      } else {
        this.$refs.bgImg.style.paddingTop = '70%'
        this.$refs.bgImg.style.height = 0
      }
      this.$refs.bgImg.style['transform'] = `scale(${scale})`
      this.$refs.bgImg.style.zIndex = zIndex
    }
  },
  components: {
    Scroll,
    Loading,
    SongList
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable'
@import '../../common/stylus/mixin'
.music-list
  position fixed
  top: 0
  left: 0
  bottom: 0
  right: 0
  z-index 100
  background $color-background
  .back
    position absolute
    top: 0
    left: 6px
    z-index: 50
    .icon-back
      display: block
      padding: 10px
      font-size: $font-size-large-x
      color: $color-theme
  .title
    position: absolute
    top: 0
    left: 10%
    z-index: 40
    width: 80%
    no-wrap()
    text-align: center
    line-height: 40px
    font-size: $font-size-large
    color: $color-text
  .bgImage-warpper
    position: relative
    width: 100%
    padding-top: 70%
    transform-origin: top
    background-size: cover
  .bg-layer
    position: relative
    height: 100%
    background: $color-background
  .list
    position: fixed
    top: 0
    bottom: 0
    width: 100%
    background: $color-background
    // overflow hidden
    .song-list-wrapper
      padding: 20px 30px
    .loading-container
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>
