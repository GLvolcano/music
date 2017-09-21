<template>
  <div class="singer" ref="singer">
    <list-view @select="selectSinger" :data="singers" ref="singerList"></list-view>
    <router-view></router-view>
  </div>
</template>

<script>
import { getsinger } from 'api/getsinger'
import ListView from 'base/listview/listview'
import { playlistMixin } from 'common/js/mixin'
import { mapMutations } from 'vuex'
const ERR_OK = 0
const HOT_LENGTH = 10
const HOT_NAME = '热门'
export default {
  mixins: [playlistMixin],
  data() {
    return {
      singers: []
    }
  },
  created() {
    this._getsinger()
  },
  methods: {
    handlePlaylist(playlist) {
      const bottom = playlist.length > 0 ? '60px' : ''
      this.$refs.singer.style.bottom = bottom
      this.$refs.singerList.refresh()
    },
    selectSinger(singer) {
      this.$router.push({
        path: `/singer/${singer.id}`
      })
      this.setSinger(singer)
    },
    _getsinger() {
      getsinger().then((res) => {
        if (res.code === ERR_OK) {
          this.singers = this._singerMap(res.data.list)
        }
      })
    },
    _singerMap(list) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      }
      list.forEach((items, index) => {
        if (index < HOT_LENGTH) {
          map.hot.items.push({
            id: items.Fsinger_mid,
            name: items.Fsinger_name,
            avatar: `https://y.gtimg.cn/music/photo_new/T001R150x150M000${items.Fsinger_mid}.jpg?max_age=2592000`
          })
        }
        const key = items.Findex
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }
        map[key].items.push({
          id: items.Fsinger_mid,
          name: items.Fsinger_name,
          avatar: `https://y.gtimg.cn/music/photo_new/T001R150x150M000${items.Fsinger_mid}.jpg?max_age=2592000`
        })
      })
      let ret = []
      let hot = []
      for (let key in map) {
        let val = map[key]
        if (val.title.match(/[a-zA-Z]/)) {
          ret.push(val)
        } else if (val.title === HOT_NAME) {
          hot.push(val)
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      return hot.concat(ret)
    },
    ...mapMutations({
      setSinger: 'SET_SINGER'
    })
  },
  components: {
    ListView
  }
}
</script>

<style lang="stylus" scoped>
.singer
  position fixed
  top 88px
  bottom 0px
  width 100%
</style>
