<template>
  <div class="progress-bar" ref="progressBar" @click="progressClick">
    <div class="bar-inner">
      <div class="progress" ref="progress"></div>
      <div class="progress-btn-wrapper" ref="progressBtn" @touchstart.prevent="progressTouchStart" @touchmove.prevent="progressTouchMove" @touchend="progressTouchEnd">
        <div class="progress-btn"></div>
      </div>
    </div>
  </div>
</template>

<script>
const progressBtnWidth = 16

export default {
  props: {
    percent: {
      type: Number,
      default: 0
    }
  },
  created() {
    this.touch = {}
  },
  methods: {
    progressClick(e) {
      const rect = this.$refs.progressBar.getBoundingClientRect()
      const offsetWidth = e.pageX - rect.left
      this._change(offsetWidth)
      this._triggerPercent()
    },
    progressTouchStart(e) {
      this.touch.inited = true
      this.touch.startX = e.touches[0].pageX
      this.touch.left = this.$refs.progress.clientWidth
    },
    progressTouchMove(e) {
      if (!this.touch.inited) {
        return
      }
      const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
      const detal = e.touches[0].pageX - this.touch.startX
      const offsetWidth = Math.min(Math.max(this.touch.left + detal, 0), barWidth)
      this._change(offsetWidth)
    },
    progressTouchEnd() {
      this.touch.inited = false
      this._triggerPercent()
    },
    _change(offsetWidth) {
      this.$refs.progress.style.width = `${offsetWidth}px`
      this.$refs.progressBtn.style['transform'] = `translate3d(${offsetWidth}px,0,0)`
    },
    _triggerPercent() {
      const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
      const percent = this.$refs.progress.clientWidth / barWidth
      this.$emit('percentChange', percent)
    }
  },
  watch: {
    percent(newPercent) {
      if (newPercent >= 0) {
        const Barwidth = this.$refs.progressBar.clientWidth - progressBtnWidth
        const offsetWidth = newPercent * Barwidth
        this._change(offsetWidth)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"

  .progress-bar
    height: 30px
    .bar-inner
      position: relative
      top: 13px
      height: 4px
      background: rgba(0, 0, 0, 0.3)
      .progress
        position: absolute
        height: 100%
        background: $color-theme
      .progress-btn-wrapper
        position: absolute
        left: -8px
        top: -13px
        width: 30px
        height: 30px
        .progress-btn
          position: relative
          top: 7px
          left: 7px
          box-sizing: border-box
          width: 16px
          height: 16px
          border: 3px solid $color-text
          border-radius: 50%
          background: $color-theme
</style>
