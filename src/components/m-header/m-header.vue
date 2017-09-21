<template>
	<div class="header">
		<div class="icon"></div>
		<h1 class="text">Snow Leopard Music</h1>
	</div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
@import '~common/stylus/mixin.styl'
@import '~common/stylus/variable.styl'
.header
	position relative
	height: 44px
	text-align:center
	color:$color-theme
	font-size: 0
	.icon
		display inline-block
		vertical-align:top
		margin-top:6px
		width:30px
		height:32px
		background-size:contain 
		bg-image('./logo')
	.text
		display inline-block
		vertical-align:top
		margin-left:9px
		line-height:44px
		font-size:$font-size-large
</style>
