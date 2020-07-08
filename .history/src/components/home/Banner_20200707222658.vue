<template>
  <!-- <Carousel autoplay v-model="value2" loop arrow="never" radius-dot='true'>
    <div v-for="item in banner.panelContents" :key="item.id">
      <CarouselItem>
        <div class="image">
          <img :src="item.picUrl" alt class="image1"/>
          <img :src="item.picUrl2" alt class="p-r image2" />
          <img :src="item.picUrl3" alt class="p-r image3" />
        </div>
      </CarouselItem>
    </div>
  </Carousel> -->
   <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
</div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "Banner",
  props: {
    banner: {
      type: Object
    }
  },
  components: {},
  data() {
    return {
      value2: 0,
    };
  },
  methods: {},
  mounted() {
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
@import "../../style/home/Banner";
</style>