<template>
  <div class="ranking">
    <scroll class="ranking-wrapper" :data="ranking">
      <ul>
        <li v-for="rank in ranking" class="rank-item" @click="selectRank(rank)">
          <div class="rank-left">
            <img width="100" height="100" :src="rank.picUrl" alt="" class="avatar">
            <span class="listenCount"> {{formt(rank.listenCount)}}万 </span>
          </div>
          <div class="rank-right">
            <ul class="rank-right-item">
              <h3 class="title"> {{rank.topTitle}} </h3>
              <li v-for="(item,index) in rank.songList" class="item">
                <span class="num">{{index+1}}</span>
                <span class="songname"> {{item.songname}} </span>
                <span class="singername">-{{item.singername}}</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script>
import { getRanking } from 'api/getRanking'
import { mapMutations } from 'vuex'
import Scroll from 'base/scroll/scroll'
export default {
  data() {
    return {
      ranking: []
    }
  },
  created() {
    this._getRanking()
  },
  methods: {
    formt(num) {
      return (num / 10000).toFixed(1)
    },
    selectRank(rank) {
      this.$router.push({
        path: `/ranking/${rank.id}`
      })
      this.setRank(rank)
    },
    _getRanking() {
      getRanking().then((res) => {
        if (res.code === 0) {
          this.ranking = res.data.topList
        }
      })
    },
    ...mapMutations({
      setRank: 'SET_RANK'
    })
  },
  computed: {
  },
  components: {
    Scroll
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixin'
@import '~common/stylus/variable'
.ranking
  position fixed
  top 88px
  bottom 0
  width 100%
  .ranking-wrapper
    height: 100%
    overflow: hidden
    margin 10px
    .rank-item
      display flex
      margin-bottom 10px
      overflow hidden
      .rank-left
        flex 0 0 100px
        position relative
        .listenCount
          position absolute
          bottom 7px
          left 5px
          line-height 12px
          color #fff
          opacity 0.6
          font-size 9px
          z-index 10
      .rank-right
        flex 1
        font-size 14px
        color $color-text
        .rank-right-item
          margin 0 10px 0 15px
          .title
            font-size 16px
            margin-bottom 5px
          .item
            no-wrap()
            line-height 21px
            .songname
              margin 0 5px 0 8px
            .singername
              color $color-text-ll 
</style>
