<template>
  <Carousel autoplay v-model="value2" loop arrow="never">
    <div v-for="item in banner.panelContents" :key="item.id">
      <CarouselItem>
        <div class="f-j">
          <img :src="item.picUrl" alt class="p-r z-2 image1"/>
          <img :src="item.picUrl2" alt class="p-r z-2 image2" />
          <img :src="item.picUrl3" alt class="p-r z-1 image3" />
        </div>
      </CarouselItem>
    </div>
  </Carousel>
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