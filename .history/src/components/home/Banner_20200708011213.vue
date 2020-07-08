<template>
  <div>
    <Carousel autoplay v-model="value2" loop arrow="never" :radius-dot="true">
      <div v-for="item in banner.panelContents" :key="item.id">
        <CarouselItem>
          <div class="image">
            <img :src="item.picUrl" alt class="image1" />
            <img :src="item.picUrl2" alt class="p-r image2" />
            <img :src="item.picUrl3" alt class="p-r image3" />
          </div>
        </CarouselItem>
      </div>
    </Carousel>
    <div class="dots">
      <div class="radius-dot p-r"></div>
      <div class="radius-dot p-r"></div>
      <div class="radius-dot p-r"></div>
    </div>
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
      value2: 0
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