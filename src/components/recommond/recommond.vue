<template>
  <div class="recommond" ref="recommend">
    <scroll class="recommend-content" ref="scroll" :data="discList" :pullup="pullup" @scrollToEnd="_getDiscList">
      <div>
        <slider :sliders="sliders" v-if="sliders.length"></slider>
        <div class="recommend-list">
          <h2 class="recommend-title">热门歌单推荐</h2>
          <ul class="recommend-items">
            <li v-for="item in discList" class="recommend-item">
              <div class="pic">
                <img width="60" height="60" v-lazy="item.imgurl" alt="">
              </div>
              <div class="text">
                <div class="name" v-html="item.creator.name"></div>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-content">
        <loading v-show="!discList.length"></loading>
      </div>
    </scroll>
  </div>
</template>

<script>
import { getslider, getDiscList } from 'api/getslider'
import Slider from '@/base/slider/slider'
import Scroll from '@/base/scroll/scroll'
import Loading from '@/base/loading/loading'
import { playlistMixin } from 'common/js/mixin'

const ERR_OK = 0
export default {
  mixins: [playlistMixin],
  data() {
    return {
      sliders: [],
      discList: [],
      pullup: true
    }
  },
  created() {
    this._getSlider()
    this._getDiscList()
  },
  methods: {
    handlePlaylist(playlist) {
      const bottom = playlist.length > 0 ? '60px' : ''
      this.$refs.recommend.style.bottom = bottom
      this.$refs.scroll.refresh()
    },
    _getSlider() {
      getslider().then((res) => {
        if (res.code === ERR_OK) {
          this.sliders = res.data.slider
        }
      })
    },
    _getDiscList() {
      getDiscList().then((res) => {
        if (res.code === ERR_OK) {
          this.discList = res.data.list.concat(this.discList)
        }
      })
    }
  },
  components: {
    Slider,
    Scroll,
    Loading
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable.styl'
.recommond
  position: fixed
  width: 100%
  top: 88px
  bottom: 0
  .recommend-content
    height: 100%
    overflow: hidden
    .recommend-list
      .recommend-title
        height: 65px
        line-height: 65px
        text-align: center
        font-size: $font-size-medium
        color: $color-theme
      .recommend-items
        .recommend-item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .pic
            flex 0 0 60px
            width 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
    .loading-content
      position absolute
      width 100%
      top 50%
      transform: translateY(-50%)


</style>
