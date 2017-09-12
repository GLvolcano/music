<template>
  <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="item in sliders" key="$index">
      <a :href="item.linkUrl" class="slide-link">
        <img :src="item.picUrl" alt="" class="slide-pic">
      </a>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
    <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: {
    sliders: {
      type: Array
    }
  },
  data() {
    return {
      notNextTick: true,
      swiperOption: {
        initialSlide: 1,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        direction: 'horizontal',
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: false,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        // prevButton: '.swiper-button-prev',
        // nextButton: '.swiper-button-next',
        // scrollbar: '.swiper-scrollbar',
        mousewheelControl: true,
        observeParents: true,
        debugger: true,
        loop: true
      }
    }
  },
  computed: {

  },
  mounted() {

  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="css" scoped>
@import './css/swiper.css';
.swiper-slide .slide-link {
  display: block;
  width: 100%;
}

.swiper-slide .slide-link .slide-pic {
  width: 100%;
}
</style>
