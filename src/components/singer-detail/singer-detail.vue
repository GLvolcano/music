<template>
  <transition name="slideRight">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script>
import { getSingerSong } from 'api/getsinger'
import { createSong } from 'common/js/song'
import MusicList from 'components/music-list/music-list'
import { mapGetters } from 'vuex'

export default {
  created() {
    this._getSong()
  },
  computed: {
    title() {
      return this.singer.name
    },
    bgImage() {
      return this.singer.avatar
    },
    ...mapGetters([
      'singer'
    ])
  },
  data() {
    return {
      songs: []
    }
  },
  methods: {
    _getSong() {
      if (!this.singer.id) {
        this.$router.push('/singer')
        return
      }
      getSingerSong(this.singer.id).then((res) => {
        let song = []
        let items = res.data.list
        items.forEach((item) => {
          let { musicData } = item
          song.push(createSong(musicData))
        })
        this.songs = song
      })
    }
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
