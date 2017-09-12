<template>
  <div class="recommond">
    <slider :sliders="sliders"></slider>
    <h2 class="recommend-title">热门歌单推荐</h2>
  </div>
</template>

<script>
import { getslider, getDiscList } from 'api/getslider'
import Slider from '@/base/slider/slider'
const ERR_OK = 0
export default {
  data() {
    return {
      sliders: [],
      discList: []
    }
  },
  created() {
    this._getSlider()
    this._getDiscList()
  },
  methods: {
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
          this.discList = res.data.list
        }
      })
    }
  },
  components: {
    Slider
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable.styl'
  .recommond
    .recommend-title
      margin: 14px 0 10px 0
      line-height: 38px
      font-size: 16px
      text-align: center
      color:$color-theme
</style>
