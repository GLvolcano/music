<template>
    <div class="tab">
        <router-link tag="div" class="tab-item" to="/recommond">
            <span class="tab-title">推荐</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/singer">
            <span class="tab-title">歌手</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/ranking">
            <span class="tab-title">排行</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/search">
            <span class="tab-title">搜索</span>
        </router-link>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
@import '~common/stylus/variable.styl'
.tab
    display:flex
    height: 44px
    line-height: 44px
    font-size: $font-size-medium
    .tab-item
        flex:1
        text-align: center
        .tab-title
            padding-bottom: 5px
            color: #fff
        &.router-link-active
            .tab-title
                color: $color-theme
                border-bottom: 2px solid $color-theme
</style>
