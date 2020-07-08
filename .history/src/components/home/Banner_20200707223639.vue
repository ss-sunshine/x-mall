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
  </Carousel>-->
  <div class="swiper-container">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item) in banner.panelContents" :key="item.id">
          <div class="box">
            <img :src="item.mobile_picture_url" />
          </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
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
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        autoplay: true,
        effect: "fade",
      }
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
@import "../../style/home/Banner";
</style>