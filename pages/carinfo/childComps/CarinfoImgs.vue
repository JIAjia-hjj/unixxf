<template>
  <view>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <view class="swiper-pagination" slot="pagination"></view>
    </swiper>
  </view>
</template>

<script>
  export default {
    name: "CarinfoImgs"
  }
</script>

<style scoped>

</style>
