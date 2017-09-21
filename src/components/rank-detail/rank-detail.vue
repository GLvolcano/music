<template>
  <transition name="slideRight">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
import { getRankSong } from 'api/getRanking'
import { createSong } from 'common/js/song'
import MusicList from 'components/music-list/music-list'
const ERR_OK = 0

export default {
  data() {
    return {
      songs: []
    }
  },
  created() {
    this._getRanksong()
  },
  methods: {
    _getRanksong() {
      if (!this.rank.id) {
        this.$router.push('/ranking')
        return
      }
      getRankSong(this.rank.id).then((res) => {
        if (res.code === ERR_OK) {
          this._editdata(res.songlist)
        }
      })
    },
    _editdata(items) {
      let song = []
      items.forEach((item) => {
        let { data } = item
        song.push(createSong(data))
      })
      this.songs = song
    }
  },
  computed: {
    title() {
      return this.rank.topTitle
    },
    bgImage() {
      return this.rank.picUrl
    },
    ...mapGetters([
      'rank'
    ])
  },
  components: {
    MusicList
  }
}
</script>

<style lang="stylus" scoped>
.slideRight-enter-active,.slideRight-leave-active
  transition all 0.3s
.slideRight-enter,.slideRight-leave-to 
  transform translate3d(100%,0,0)
</style>
