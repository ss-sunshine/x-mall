<template>
  <div>
    <Carousel
      autoplay
      v-model="value"
      loop
      arrow="never"
      :radius-dot="true"
      @on-change="swiperChange"
    >
      <div v-for="item in banner.panelContents" :key="item.id">
        <CarouselItem>
          <div class="image">
            <img :src="item.picUrl" alt class="image1" />
            <img :src="item.picUrl2" alt class="p-r image2" />
            <img :src="item.picUrl3" alt class="p-r image3" />
            <div class="dots p-r f-j">
              <div class="radius-dot" :class="{'radius-dots':id===value}"></div>
              <div class="radius-dot" :class="{'radius-dots':id===value}"></div>
              <div class="radius-dot" :class="{'radius-dots':id===value}"></div>
            </div>
          </div>
        </CarouselItem>
      </div>
    </Carousel>
  </div>
</template>

<script>
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
      value: 0,
      id: ""
    };
  },
  methods: {
    swiperChange() {
      this.id = this.value;
    }
  },
  mounted() {
    // this.swiperChange()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
@import "../../style/home/Banner";
</style>